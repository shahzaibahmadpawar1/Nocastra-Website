"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBanner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particles: Particle[] = [];
    let particleCount = 0;
    const connectionDistance = 120;
    const mouseConnectionDistance = 170;

    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = rect.width;
      height = rect.height;

      // Set internal resolution scaled by DPR for crisp high-DPI rendering
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Set display CSS size to logical dimensions
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Reset transformations and scale the context drawing coordinates
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      // Re-populate particles to fit space density on resize
      const targetCount = Math.min(50, Math.floor((width * height) / 10000) + 15);
      if (particles.length === 0) {
        for (let i = 0; i < targetCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 2 + 1.5,
          });
        }
      } else if (particles.length < targetCount) {
        for (let i = particles.length; i < targetCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 2 + 1.5,
          });
        }
      }
      particleCount = targetCount;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
      parent.style.position = "relative";
      parent.style.overflow = "hidden";
    }
    
    // Perform initial resize call
    resize();
    window.addEventListener("resize", resize);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particle circles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Rich deep dark navy blue dots
        ctx.fillStyle = "rgba(15, 32, 95, 0.7)";
        ctx.fill();
      });

      // Draw connecting vector paths
      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];
        if (!p1) continue;

        // Draw line vector to mouse coordinate
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouseConnectionDistance) {
          const alpha = (1 - distMouse / mouseConnectionDistance) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(15, 32, 95, ${alpha})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }

        // Draw line vector to neighboring particle coordinates
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          if (!p2) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(15, 32, 95, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

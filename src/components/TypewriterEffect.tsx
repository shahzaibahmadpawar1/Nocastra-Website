"use client";

import { useState, useEffect, useRef, useMemo, startTransition } from "react";

export interface WordObject {
  word: string;
}

export interface TypewriterEffectProps {
  words?: WordObject[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorColor?: string;
  cursorWidth?: number;
  cursorHeight?: number;
  font?: React.CSSProperties;
  textColor?: string;
  style?: React.CSSProperties;
}

export default function TypewriterEffect({
  words = [{ word: "Hello" }, { word: "World" }, { word: "Framer" }],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1000,
  cursorColor = "#FFFFFF",
  cursorWidth = 2,
  cursorHeight = 100,
  font,
  textColor,
  style,
}: TypewriterEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blinkRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentWord = words.length > 0 ? words[wordIndex % words.length].word : "";

  // Typing/Deleting Effect
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    let delay = typingSpeed;

    if (!isDeleting && charIndex < currentWord.length) {
      delay = typingSpeed;
      timeoutRef.current = setTimeout(() => {
        startTransition(() => {
          setDisplayed(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        });
      }, delay);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      timeoutRef.current = setTimeout(() => {
        startTransition(() => setIsDeleting(true));
      }, pauseDuration);
    } else if (isDeleting && charIndex > 0) {
      delay = deletingSpeed;
      timeoutRef.current = setTimeout(() => {
        startTransition(() => {
          setDisplayed(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        });
      }, delay);
    } else if (isDeleting && charIndex === 0) {
      // Pause before next word
      timeoutRef.current = setTimeout(() => {
        startTransition(() => {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        });
      }, pauseDuration);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    currentWord,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    words.length,
  ]);

  // Reset charIndex when wordIndex changes
  useEffect(() => {
    if (!isDeleting) {
      startTransition(() => setCharIndex(0));
    }
  }, [wordIndex, isDeleting]);

  // Blinking Cursor Effect
  useEffect(() => {
    if (blinkRef.current) clearInterval(blinkRef.current);
    blinkRef.current = setInterval(() => {
      startTransition(() => setShowCursor((v) => !v));
    }, 500);

    return () => {
      if (blinkRef.current) clearInterval(blinkRef.current);
    };
  }, []);

  // Font size for cursor height calculation
  const fontSize = useMemo(() => {
    if (font && font.fontSize) {
      if (typeof font.fontSize === "string" && font.fontSize.endsWith("px")) {
        return parseFloat(font.fontSize);
      } else if (typeof font.fontSize === "number") {
        return font.fontSize;
      }
    }
    return null;
  }, [font]);

  const computedCursorHeight = fontSize !== null 
    ? fontSize * (cursorHeight / 100) 
    : `${cursorHeight / 100}em`;

  return (
    <span
      style={{
        ...style,
        ...font,
        color: textColor,
        display: "inline-flex",
        alignItems: "center",
        minWidth: 1,
        minHeight: 1,
        width: "max-content",
        height: "max-content",
        whiteSpace: "pre",
      }}
      aria-live="polite"
    >
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          background: cursorColor,
          width: cursorWidth,
          height: computedCursorHeight,
          marginLeft: 2,
          marginRight: 2,
          verticalAlign: "bottom",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          borderRadius: 2,
        }}
      />
    </span>
  );
}

import React from 'react';
import { LucideIcon } from 'lucide-react';

export type StatItem = {
  icon?: LucideIcon;
  value?: string;
  label: string;
};

interface StatsSectionProps {
  variant?: 'A' | 'B';
  theme?: 'light' | 'dark';
  stats: StatItem[];
}

export default function StatsSection({ variant = 'A', theme = 'light', stats }: StatsSectionProps) {
  // Theme-specific styles
  const isDark = theme === 'dark';
  
  const cardBg = isDark ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc';
  const cardBorder = isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid var(--border-color)';
  
  const iconBoxBg = isDark ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe';
  const iconColor = isDark ? '#38bdf8' : '#0284c7';
  
  const valueColor = isDark ? '#ffffff' : 'var(--text-primary)';
  const labelColor = isDark ? '#94a3b8' : 'var(--text-secondary)';
  
  const variantBValueColor = iconColor;
  const variantBLabelColor = isDark ? '#f1f5f9' : 'var(--text-primary)';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '24px',
      width: '100%',
    }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{
          backgroundColor: cardBg,
          border: cardBorder,
          borderRadius: '16px',
          padding: variant === 'A' ? '24px' : '32px 24px',
          display: 'flex',
          alignItems: variant === 'A' ? 'center' : 'center',
          flexDirection: variant === 'A' ? 'row' : 'column',
          gap: variant === 'A' ? '20px' : '16px',
          backdropFilter: isDark ? 'blur(10px)' : 'none',
        }}>
          {variant === 'A' ? (
            <>
              {/* Variant A: Icon on Left */}
              <div style={{
                backgroundColor: iconBoxBg,
                color: iconColor,
                padding: '16px',
                borderRadius: '14px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0
              }}>
                {stat.icon && <stat.icon size={28} strokeWidth={2} />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {stat.value && (
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 700, 
                    color: valueColor, 
                    marginBottom: '4px',
                    lineHeight: '1.2'
                  }}>
                    {stat.value}
                  </h3>
                )}
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: labelColor, 
                  lineHeight: '1.4' 
                }}>
                  {stat.label}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Variant B: Centered Layout */}
              {stat.value ? (
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 800, 
                  color: variantBValueColor,
                  lineHeight: '1',
                  letterSpacing: '-1px'
                }}>
                  {stat.value}
                </div>
              ) : stat.icon ? (
                <div style={{ color: iconColor }}>
                  <stat.icon size={48} strokeWidth={1.5} />
                </div>
              ) : null}
              <div style={{ 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                color: variantBLabelColor,
                textAlign: 'center'
              }}>
                {stat.label}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

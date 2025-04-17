'use client';

import React from 'react';

interface NeonCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  glowEffect?: boolean;
}

export function NeonCard({
  children,
  title,
  className = '',
  glowEffect = false,
}: NeonCardProps) {
  return (
    <div 
      className={`bg-card rounded-lg border border-border overflow-hidden ${
        glowEffect ? 'neon-border' : ''
      } ${className}`}
    >
      {title && (
        <div className="border-b border-border p-4">
          <h3 className={`font-medium text-lg ${glowEffect ? 'text-primary neon-glow' : 'text-card-foreground'}`}>
            {title}
          </h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

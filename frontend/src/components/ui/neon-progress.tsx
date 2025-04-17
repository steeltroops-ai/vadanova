'use client';

import React from 'react';

interface NeonProgressProps {
  value: number;
  max?: number;
  color?: 'primary' | 'secondary' | 'destructive';
  showValue?: boolean;
  className?: string;
}

export function NeonProgress({
  value,
  max = 100,
  color = 'primary',
  showValue = false,
  className = '',
}: NeonProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const colorStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    destructive: 'bg-destructive',
  };
  
  return (
    <div className={`relative w-full overflow-hidden rounded-full bg-secondary/20 h-2 ${className}`}>
      <div
        className={`h-full transition-all ${colorStyles[color]}`}
        style={{ width: `${percentage}%` }}
      />
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
}

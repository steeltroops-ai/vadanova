'use client';

import React from 'react';

interface NeonBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export function NeonBadge({
  children,
  variant = 'default',
  className = '',
}: NeonBadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const variantStyles = {
    default: 'bg-secondary text-secondary-foreground',
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-secondary/80 text-secondary-foreground',
    destructive: 'bg-destructive/20 text-destructive',
    outline: 'border border-primary text-primary',
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

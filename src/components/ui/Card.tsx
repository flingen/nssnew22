import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'glass-strong';
  hover?: boolean;
}

export function Card({ children, className = '', variant = 'solid', hover = false }: CardProps) {
  const variantClasses = {
    glass: 'glass-card',
    'glass-strong': 'glass-card-strong',
    solid: 'bg-navy-surface border border-white/5',
  };

  const hoverClass = hover ? 'card-hover' : '';

  return (
    <div className={`rounded-lg p-6 ${variantClasses[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

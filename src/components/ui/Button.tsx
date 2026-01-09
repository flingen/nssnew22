import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-6 py-3 font-satoshi font-bold text-sm tracking-wide transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

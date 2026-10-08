import React from 'react';
import { cn } from '@kapwa/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      'bg-[var(--color-kapwa-bg-brand-default)] text-[var(--color-kapwa-text-inverse)] hover:bg-[var(--color-kapwa-bg-brand-hover)] active:bg-[var(--color-kapwa-bg-brand-active)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
    secondary:
      'bg-[var(--color-kapwa-bg-gray-default)] text-[var(--color-kapwa-text-strong)] hover:bg-[var(--color-kapwa-bg-gray-hover)] active:bg-[var(--color-kapwa-bg-gray-active)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
    outline:
      'border border-[var(--color-kapwa-border-strong)] bg-transparent text-[var(--color-kapwa-text-support)] hover:bg-[var(--color-kapwa-bg-gray-default)] active:bg-[var(--color-kapwa-bg-gray-hover)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
    ghost:
      'bg-transparent text-[var(--color-kapwa-text-support)] hover:bg-[var(--color-kapwa-bg-gray-default)] active:bg-[var(--color-kapwa-bg-gray-hover)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
    link: 'h-auto bg-transparent p-0 text-[var(--color-kapwa-text-link)] hover:text-[var(--color-kapwa-text-link-hover)] hover:underline focus-visible:ring-0',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5 h-8',
    md: 'text-base px-4 py-2 h-10',
    lg: 'text-lg px-6 py-3 h-12',
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        isDisabled ? 'opacity-60 cursor-not-allowed' : '',
        variant !== 'link' && 'shadow-xs',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <svg
          className='animate-spin -ml-1 mr-2 h-4 w-4 text-current'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className='mr-2'>{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className='ml-2'>{rightIcon}</span>}
    </button>
  );
};

export { Button };

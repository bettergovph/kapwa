import React from 'react';
import { cn } from '@kapwa/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link';
type ButtonTone =
  | 'brand'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const toneMap: Record<
  ButtonTone,
  {
    filled: string;
    outline: string;
    ghost: string;
    link: string;
  }
> = {
  brand: {
    filled:
      'bg-kapwa-brand-600 hover:bg-kapwa-brand-700 active:bg-kapwa-brand-800 kapwa-text-inverse',
    outline:
      'bg-transparent border border-kapwa-brand-600 kapwa-text-brand hover:bg-kapwa-brand-50 active:bg-kapwa-brand-100',
    ghost:
      'bg-transparent kapwa-text-brand hover:bg-kapwa-brand-50 active:bg-kapwa-brand-100',
    link: 'bg-transparent kapwa-text-brand hover:kapwa-text-link-hover underline p-0 h-auto',
  },
  info: {
    filled:
      'bg-kapwa-brand-600 hover:bg-kapwa-brand-700 active:bg-kapwa-brand-800 kapwa-text-inverse',
    outline:
      'bg-transparent border border-kapwa-brand-600 kapwa-text-info hover:bg-kapwa-brand-50 active:bg-kapwa-brand-100',
    ghost:
      'bg-transparent kapwa-text-info hover:bg-kapwa-brand-50 active:bg-kapwa-brand-100',
    link: 'bg-transparent kapwa-text-info underline p-0 h-auto',
  },
  success: {
    filled:
      'bg-kapwa-green-600 hover:bg-kapwa-green-700 active:bg-kapwa-green-800 kapwa-text-inverse',
    outline:
      'bg-transparent border border-kapwa-green-600 kapwa-text-success hover:bg-kapwa-green-50 active:bg-kapwa-green-100',
    ghost:
      'bg-transparent kapwa-text-success hover:bg-kapwa-green-50 active:bg-kapwa-green-100',
    link: 'bg-transparent kapwa-text-success underline p-0 h-auto',
  },
  warning: {
    filled:
      'bg-kapwa-orange-600 hover:bg-kapwa-orange-700 active:bg-kapwa-orange-800 kapwa-text-inverse',
    outline:
      'bg-transparent border border-kapwa-orange-600 kapwa-text-warning hover:bg-kapwa-orange-50 active:bg-kapwa-orange-100',
    ghost:
      'bg-transparent kapwa-text-warning hover:bg-kapwa-orange-50 active:bg-kapwa-orange-100',
    link: 'bg-transparent kapwa-text-warning underline p-0 h-auto',
  },
  danger: {
    filled:
      'bg-kapwa-red-700 hover:bg-kapwa-red-800 active:bg-kapwa-red-900 kapwa-text-inverse',
    outline:
      'bg-transparent border border-kapwa-red-700 kapwa-text-danger hover:bg-kapwa-red-50 active:bg-kapwa-red-100',
    ghost:
      'bg-transparent kapwa-text-danger hover:bg-kapwa-red-50 active:bg-kapwa-red-100',
    link: 'bg-transparent kapwa-text-danger underline p-0 h-auto',
  },
  neutral: {
    filled:
      'bg-kapwa-gray-50 hover:bg-kapwa-gray-100 active:bg-kapwa-gray-200 kapwa-text-strong',
    outline:
      'bg-transparent border border-kapwa-gray-400 kapwa-text-strong hover:bg-kapwa-gray-50 active:bg-kapwa-gray-100',
    ghost:
      'bg-transparent kapwa-text-strong hover:bg-kapwa-gray-50 active:bg-kapwa-gray-100',
    link: 'bg-transparent kapwa-text-strong underline p-0 h-auto',
  },
};

const getVariantClasses = (
  variant: ButtonVariant,
  tone: ButtonTone
): string => {
  const t = toneMap[tone];
  switch (variant) {
    case 'primary':
      return t.filled;
    case 'outline':
      return t.outline;
    case 'ghost':
      return t.ghost;
    case 'link':
      return t.link;
  }
};

const sizes: Record<ButtonSize, string> = {
  sm: 'kapwa-label-sm kapwa-px-sm kapwa-py-2xs h-8',
  md: 'kapwa-label-md kapwa-px-md kapwa-py-xs h-10',
  lg: 'kapwa-label-lg kapwa-px-lg kapwa-py-sm h-12',
};

const Button = ({
  children,
  className,
  variant = 'primary',
  tone = 'brand',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  loadingLabel = 'Loading…',
  leftIcon,
  rightIcon,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-kapwa-blue-500',
        'active:scale-[0.97]',
        getVariantClasses(variant, tone),
        sizes[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
        isLoading ? 'opacity-60 cursor-wait' : '',
        variant !== 'link' && variant !== 'ghost' && 'shadow-xs',
        className
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <>
          <svg
            className='animate-spin kapwa-mr-2xs kapwa-h-xs kapwa-w-xs text-current'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
          <span className='sr-only'>{loadingLabel}</span>
        </>
      )}
      {!isLoading && leftIcon && (
        <span className='kapwa-mr-xs' aria-hidden='true'>
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className='kapwa-ml-xs' aria-hidden='true'>
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export { Button };
export type { ButtonProps, ButtonVariant, ButtonTone, ButtonSize };

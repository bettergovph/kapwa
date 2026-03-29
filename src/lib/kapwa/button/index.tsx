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
      'kapwa-bg-brand-default hover:kapwa-bg-brand-hover active:kapwa-bg-brand-active kapwa-text-inverse',
    outline:
      'bg-transparent border kapwa-border-brand kapwa-text-brand hover:kapwa-bg-brand-weak active:bg-kapwa-brand-100',
    ghost:
      'bg-transparent kapwa-text-brand hover:kapwa-bg-brand-weak active:bg-kapwa-brand-100',
    link: 'bg-transparent kapwa-text-brand hover:kapwa-text-link-hover underline p-0 h-auto',
  },
  info: {
    // info tokens remap to brand visually (see kapwa.css) — semantically distinct
    filled:
      'kapwa-bg-info-default hover:kapwa-bg-info-hover active:kapwa-bg-info-active kapwa-text-inverse',
    outline:
      'bg-transparent border kapwa-border-info kapwa-text-info hover:kapwa-bg-info-weak active:bg-kapwa-brand-100',
    ghost:
      'bg-transparent kapwa-text-info hover:kapwa-bg-info-weak active:bg-kapwa-brand-100',
    link: 'bg-transparent kapwa-text-info underline p-0 h-auto',
  },
  success: {
    filled:
      'kapwa-bg-success-default hover:kapwa-bg-success-hover active:kapwa-bg-success-active kapwa-text-inverse',
    outline:
      'bg-transparent border kapwa-border-success kapwa-text-success hover:kapwa-bg-success-weak active:bg-kapwa-green-100',
    ghost:
      'bg-transparent kapwa-text-success hover:kapwa-bg-success-weak active:bg-kapwa-green-100',
    link: 'bg-transparent kapwa-text-success underline p-0 h-auto',
  },
  warning: {
    filled:
      'kapwa-bg-warning-default hover:kapwa-bg-warning-hover active:kapwa-bg-warning-active kapwa-text-inverse',
    outline:
      'bg-transparent border kapwa-border-warning kapwa-text-warning hover:kapwa-bg-warning-weak active:bg-kapwa-orange-100',
    ghost:
      'bg-transparent kapwa-text-warning hover:kapwa-bg-warning-weak active:bg-kapwa-orange-100',
    link: 'bg-transparent kapwa-text-warning underline p-0 h-auto',
  },
  danger: {
    filled:
      'kapwa-bg-danger-default hover:kapwa-bg-danger-hover active:kapwa-bg-danger-active kapwa-text-inverse',
    outline:
      'bg-transparent border kapwa-border-danger kapwa-text-danger hover:kapwa-bg-danger-weak active:bg-kapwa-red-100',
    ghost:
      'bg-transparent kapwa-text-danger hover:kapwa-bg-danger-weak active:bg-kapwa-red-100',
    link: 'bg-transparent kapwa-text-danger underline p-0 h-auto',
  },
  neutral: {
    // No semantic bg tokens for neutral — using @theme primitives
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

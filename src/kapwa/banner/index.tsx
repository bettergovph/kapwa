import React from 'react';
import { cn } from '@lib/utils';
import { Button } from '../button';

export type BannerType = 'info' | 'warning' | 'error' | 'success' | 'default';

export interface BannerProps {
  title?: string;
  description: string;
  type?: BannerType;
  icon?: boolean;
  cta?:
    | {
        label: string;
        onClick: () => void;
        href?: string;
        variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
        size?: 'sm' | 'md' | 'lg';
      }
    | Array<{
        label: string;
        onClick: () => void;
        href?: string;
        variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
        size?: 'sm' | 'md' | 'lg';
      }>;
  className?: string;
  onDismiss?: () => void;
  titleSize?: 'sm' | 'md' | 'lg';
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  type = 'default',
  icon = false,
  cta,
  className,
  onDismiss,
  titleSize = 'lg',
}) => {
  const typeStyles = {
    success: {
      container: 'bg-green-50 border border-green-200',
      icon: 'text-green-600',
      title: 'text-green-800',
      description: 'text-green-700',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    error: {
      container: 'bg-red-50 border border-red-200',
      icon: 'text-red-600',
      title: 'text-red-800',
      description: 'text-red-700',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    warning: {
      container: 'bg-yellow-50 border border-yellow-200',
      icon: 'text-yellow-600',
      title: 'text-yellow-800',
      description: 'text-yellow-700',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    info: {
      container: 'bg-blue-50 border border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-800',
      description: 'text-blue-700',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    default: {
      container: 'bg-gray-50 border border-gray-200',
      icon: 'text-gray-600',
      title: 'text-gray-900',
      description: 'text-gray-800',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const getButtonStyling = (
    variant: string = 'primary',
    size: string = 'lg'
  ) => {
    const variants = {
      primary:
        'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
      secondary:
        'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
      outline:
        'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500',
      ghost:
        'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizes = {
      sm: 'text-sm px-3 py-1.5 h-8',
      md: 'text-base px-4 py-2 h-10',
      lg: 'text-lg px-6 py-3 h-12',
    };

    return cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors',
      'focus:outline-hidden focus:ring-2 focus:ring-offset-2',
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      'shadow-xs'
    );
  };

  const currentStyles = typeStyles[type];

  // Helper function to render a single CTA button
  const renderCTAButton = (
    ctaItem: {
      label: string;
      onClick: () => void;
      href?: string;
      variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
      size?: 'sm' | 'md' | 'lg';
    },
    index: number
  ) => {
    if (ctaItem.href) {
      return (
        <a
          key={index}
          href={ctaItem.href}
          className={getButtonStyling(ctaItem.variant, ctaItem.size)}
        >
          {ctaItem.label}
        </a>
      );
    }

    return (
      <Button
        key={index}
        onClick={ctaItem.onClick}
        variant={ctaItem.variant || 'primary'}
        size={ctaItem.size || 'md'}
      >
        {ctaItem.label}
      </Button>
    );
  };

  // CTA button (for banner with button layout)
  if (cta) {
    const ctaArray = Array.isArray(cta) ? cta : [cta];

    return (
      <div
        className={cn(
          'relative rounded-lg p-4',
          currentStyles.container,
          className
        )}
      >
        <div className='md:flex items-center'>
          <div
            className={cn(
              'mb-6 md:mb-0 md:w-2/3 md:pr-8',
              onDismiss ? 'pr-10 md:pr-8' : ''
            )}
          >
            {title && (
              <h3
                className={cn(
                  'font-semibold mb-2',
                  currentStyles.title,
                  titleSizes[titleSize]
                )}
              >
                {title}
              </h3>
            )}
            <p className={currentStyles.description}>{description}</p>
          </div>
          <div className='md:w-1/3 flex justify-center md:justify-end'>
            <div className='flex space-x-2 items-center'>
              {ctaArray.map((ctaItem, index) =>
                renderCTAButton(ctaItem, index)
              )}
              {onDismiss && (
                <button
                  onClick={onDismiss}
                  className='absolute top-2 right-2 md:relative md:top-auto md:right-auto rounded-md p-2 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2'
                  aria-label='Dismiss banner'
                >
                  <svg
                    className='w-4 h-4 opacity-60'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard banner layout (with or without icon)
  return (
    <div
      className={cn(
        'relative flex justify-between rounded-lg p-4',
        currentStyles.container,
        className
      )}
    >
      {onDismiss && (
        <button
          onClick={onDismiss}
          className='absolute top-2 right-2 md:relative md:top-auto md:right-auto md:flex md:items-center md:justify-end md:ml-3 flex-shrink-0 rounded-md p-2 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2'
          aria-label='Dismiss banner'
        >
          <svg
            className='w-4 h-4 opacity-60'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}
      <div
        className={cn(
          'flex items-center',
          title ? 'items-start' : 'items-center',
          onDismiss ? 'pr-10 md:pr-0' : ''
        )}
      >
        {icon && (
          <div className={cn('mr-3', title ? 'mt-1' : '', currentStyles.icon)}>
            {currentStyles.iconSvg}
          </div>
        )}

        <div className='flex-1'>
          {title && (
            <h3
              className={cn(
                'font-semibold',
                currentStyles.title,
                titleSizes[titleSize]
              )}
            >
              {title}
            </h3>
          )}
          <p className={cn(currentStyles.description, 'text-sm')}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Banner };

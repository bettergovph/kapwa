import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './index';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success', 'default'],
    },
    icon: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    titleSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

// === CORE PRACTICAL PATTERNS ===

// 4. Call-to-Action Banner (Government services)
export const Default: Story = {
  args: {
    type: 'default',
    title: 'Government Directory',
    description:
      'Access contact information for Philippine government offices and agencies.',
    titleSize: 'lg',
  },
};

// 1. Visa Status Banners (Most common use case)
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Visa-Free Entry',
    description:
      'Citizens can enter Philippines visa-free for a stay of 30 days with valid passport and return ticket.',
    icon: true,
    titleSize: 'lg',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Visa Required',
    description:
      'Citizens must obtain a visa before entering Philippines. Please contact the nearest Philippine embassy or consulate.',
    icon: true,
    titleSize: 'lg',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Special Conditions Apply',
    description:
      'Entry may be granted under special conditions for 14 days with specific documentation requirements.',
    icon: true,
    titleSize: 'lg',
  },
};

// 3. Text-Only Information (Clean layouts)
export const Info: Story = {
  args: {
    type: 'info',
    title: 'System Status',
    description:
      'All government services are currently operational and running smoothly.',
    icon: true,
    titleSize: 'md',
  },
};

// 4. Call-to-Action Banner (Government services)
export const WithCTA: Story = {
  args: {
    type: 'default',
    title: 'Government Directory',
    description:
      'Access contact information for Philippine government offices and agencies.',
    cta: {
      label: 'View Directory',
      onClick: () => alert('Viewing directory!'),
      href: '/government/executive',
      variant: 'primary',
      size: 'md',
    },
    titleSize: 'lg',
  },
};

// 7. Multiple CTAs with Links
export const WithMultipleCTA: Story = {
  args: {
    type: 'default',
    title: 'Join the Community',
    description: 'Connect with others and share your experiences.',
    cta: [
      {
        label: 'Join Now',
        onClick: () => alert('Joining now!'),
        variant: 'primary',
        size: 'md',
      },
      {
        label: 'Discord',
        onClick: () => alert('Downloading forms!'),
        variant: 'link',
        size: 'md',
      },
    ],
    titleSize: 'lg',
    icon: true,
  },
};

// 5. Dismissible Notification (User interactions)
export const Dismissible: Story = {
  args: {
    type: 'info',
    title: 'New Features Available',

    description:
      'Check out the latest updates to your government services dashboard.',

    cta: {
      label: 'Explore Features',
      onClick: () => alert('Exploring features!'),
      variant: 'primary',
      size: 'md',
    },

    onDismiss: () => alert('Banner dismissed!'),
    titleSize: 'lg',
    icon: true,
  },
};

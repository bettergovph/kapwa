import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable button component with multiple color variants built with design system tokens and Tailwind CSS.',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The primary button variant should be used for the main call-to-action on a page. It uses the primary brand color and has the highest visual prominence to guide users toward the most important action.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The secondary button variant is used for supporting actions that are less critical than the primary action. It has a subtle appearance with an outline style that provides clear interaction feedback without competing with primary buttons.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The disabled state prevents user interaction and provides visual feedback that the button is currently unavailable. Use this state when an action cannot be performed due to form validation, loading states, or insufficient permissions. The button maintains its semantic meaning while being visually muted.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The outline button variant provides a subtle alternative to filled buttons. It uses a border with transparent background, making it perfect for secondary actions or when you need a lighter visual treatment that still maintains clear boundaries.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The ghost button variant has a completely transparent background until hovered. It provides the most subtle button treatment, ideal for tertiary actions, navigation elements, or when you want minimal visual impact while maintaining interactivity.',
      },
    },
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The link button variant appears as a text link with underline on hover. Use this for actions that should feel like navigation or when you want button functionality with the appearance of a hyperlink.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The small size variant is perfect for compact interfaces, table actions, or when space is limited. It maintains readability while reducing the visual footprint.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The large size variant provides extra prominence for important actions. Use it for hero sections, form submissions, or when you need to draw significant attention to an action.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The full width variant stretches the button to fill its container. This is commonly used in mobile interfaces, forms, or cards where you want the button to span the entire available width.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The loading state shows a spinner and disables interaction while an async operation is in progress. This provides clear feedback to users that their action is being processed and prevents duplicate submissions.',
      },
    },
  },
};

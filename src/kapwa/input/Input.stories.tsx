import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Elements/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      source: { type: 'code' },
      description: {
        component: `
# Input Component

The Input component is a flexible form control that supports various input types and states. Built with accessibility in mind, it provides consistent styling across the design system and adapts to different screen sizes.

## Features

- **Multiple Input Types**: Supports text, password, email, number, search, and more
- **Accessible**: Proper focus management and keyboard navigation
- **Responsive Design**: Adapts text size for mobile and desktop viewports
- **Consistent Styling**: Uses design system tokens for colors, spacing, and borders
- **Form Integration**: Works seamlessly with form libraries and validation
- **State Management**: Supports disabled, read-only, and error states

## Usage

Use Input components for collecting user data in forms, search interfaces, and any scenario requiring text input. Choose appropriate input types to enable browser validation and optimize mobile keyboards.
        `,
      },
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
      description:
        'The input type that determines validation and keyboard behavior',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the input is empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents user interaction with the input',
    },
    readOnly: {
      control: 'boolean',
      description: 'Allows selection but prevents modification',
    },
    value: {
      control: 'text',
      description: 'The current value of the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the input',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The default input field with placeholder text. This is the most common input variant used for text entry, featuring consistent styling, focus states, and responsive design that adapts to different screen sizes.',
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
  },
  parameters: {
    docs: {
      description: {
        story:
          'An input field with a pre-filled value. This demonstrates how the input appears when it contains text, useful for showing edit forms, default values, or controlled input components where the value is managed by state.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A disabled input field that prevents user interaction. The disabled state provides visual feedback with reduced opacity and cursor changes, indicating that the field is temporarily unavailable due to permissions, loading states, or form validation requirements.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error state',
    className: 'border-red-500 focus-visible:ring-red-500',
  },
  parameters: {
    docs: {
      description: {
        story:
          'An input field in an error state, typically used for form validation feedback. The error styling includes red border coloring to clearly indicate validation issues and guide users to correct their input.',
      },
    },
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A password input field that automatically masks the entered text for security. This input type is essential for authentication forms and sensitive data entry, providing built-in privacy protection.',
      },
    },
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email address',
  },
  parameters: {
    docs: {
      description: {
        story:
          'An email input field with built-in validation for email format. This input type provides automatic validation and appropriate mobile keyboard layouts, improving user experience for email entry.',
      },
    },
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A number input field that accepts only numeric values. This input type provides spinner controls and validates numeric input, perfect for quantities, prices, or any numerical data entry.',
      },
    },
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A search input field optimized for search functionality. This input type may include a clear button and provides semantic meaning for screen readers and search engines.',
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'Read-only content',
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A read-only input field that displays information without allowing user modification. Unlike disabled inputs, read-only fields can still be focused and their content can be selected and copied.',
      },
    },
  },
};

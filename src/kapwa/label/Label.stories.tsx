import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Elements/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Label Component

The Label component is built on top of Radix UI's Label primitive and provides accessible, semantic labeling for form controls. It automatically handles the association between labels and form elements, improving accessibility and user experience.

## Features

- **Accessibility**: Proper label association with form controls using Radix UI
- **Semantic HTML**: Uses the appropriate HTML \`<label>\` element
- **Consistent Styling**: Design system typography and spacing
- **Disabled State Handling**: Automatically adapts when associated form controls are disabled
- **Click Association**: Clicking the label focuses or activates the associated form control

## Usage

Use Label components to provide clear, descriptive text for form inputs, checkboxes, radio buttons, and other interactive elements. Always associate labels with their corresponding form controls for optimal accessibility.
        `,
      },
    },
  },
  args: {
    children: 'Label Text',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the label',
    },
    htmlFor: {
      control: 'text',
      description: 'The ID of the form control this label is associated with',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the label',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The default label with standard styling and typography. This is the most common label variant used for form controls, featuring consistent design system styling with proper font weight and spacing.',
      },
    },
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Custom Color Label',
    style: { color: 'tomato' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'A label with custom color styling applied through inline styles. This demonstrates how labels can be customized for special cases, such as highlighting required fields, error states, or creating visual hierarchy in complex forms.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: 'Large Label',
    style: { fontSize: '2rem' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'A label with increased font size for enhanced prominence. This variant is useful for section headings, primary form labels, or when you need to create visual hierarchy within forms and interfaces.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    children: (
      <>
        Email Address <span className='text-red-500'>*</span>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'A label indicating a required field with a red asterisk. This pattern helps users identify mandatory fields in forms and improves form completion rates by clearly communicating expectations.',
      },
    },
  },
};

export const WithAssociatedInput: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='email-input'>Email Address</Label>
      <input
        id='email-input'
        type='email'
        placeholder='Enter your email'
        className='flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A label properly associated with an input field using the htmlFor attribute. This demonstrates the correct accessibility pattern where clicking the label focuses the input, and screen readers can properly associate the label with its control.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label
        htmlFor='disabled-input'
        className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Disabled Field
      </Label>
      <input
        id='disabled-input'
        type='text'
        disabled
        placeholder='This field is disabled'
        className='flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 peer'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A label associated with a disabled input field. The label automatically adapts its appearance when the associated form control is disabled, showing reduced opacity and changing the cursor to indicate the field is not interactive.',
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    children: 'Password',
    className: 'text-red-600',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A label styled for error states with red coloring. This variant is used to indicate validation errors or required fields that need attention, helping users quickly identify and resolve form issues.',
      },
    },
  },
};

export const Subtle: Story = {
  args: {
    children: 'Optional Information',
    className: 'text-gray-500 font-normal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A subtle label with muted coloring and normal font weight. This variant is useful for optional fields, secondary information, or when you want to de-emphasize certain form elements while maintaining accessibility.',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost', 'link'],
    },
    tone: {
      control: 'select',
      options: ['brand', 'info', 'success', 'warning', 'danger', 'neutral'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: 'Button', variant: 'primary', tone: 'brand' },
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-3'>
      <Button variant='primary'>Primary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className='flex flex-col gap-3'>
      {(['primary', 'outline', 'ghost'] as const).map(variant => (
        <div key={variant} className='flex flex-wrap items-center gap-3'>
          {(
            [
              'brand',
              'info',
              'success',
              'warning',
              'danger',
              'neutral',
            ] as const
          ).map(tone => (
            <Button key={tone} variant={variant} tone={tone}>
              {tone.charAt(0).toUpperCase() + tone.slice(1)}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-3'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-3'>
      <Button>Default</Button>
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { children: 'Full Width Button', fullWidth: true },
  parameters: { layout: 'padded' },
};

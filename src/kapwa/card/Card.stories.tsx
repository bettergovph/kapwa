import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardImage } from '.';
import { Button } from '../button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='w-96'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <CardImage
          src='https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg'
          alt='Article thumbnail'
        />
        <CardContent>
          <span className='inline-block px-2 py-1 text-xs font-medium rounded-sm bg-primary-100 text-primary-800 mb-2'>
            News
          </span>
          <h3 className='text-xl font-semibold mb-2'>
            Digital Government Initiatives
          </h3>
          <p className='text-gray-800 mb-4'>
            Latest updates on the government&apos;s digital transformation
            projects and e-services.
          </p>
          <Button variant='link'>Read More</Button>
        </CardContent>
      </div>
    ),
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LoadingButtonDummy from './LoadingButtonDummy';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example2/LoadingButtonDummy',
  component: LoadingButtonDummy,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: { control: 'text' },
    loading: { control: 'boolean' },
    className: { control: 'text' },
    title: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'radio', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof LoadingButtonDummy>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Button',
    loading: false,
    className: '',
    title: 'Primary Button',
    name: '',
    type: 'button',
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    text: 'Button',
    loading: true,
    className: '',
    title: 'Loading Button',
    name: '',
    type: 'button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Button',
    loading: false,
    className: '',
    title: 'Disabled Button',
    name: '',
    type: 'button',
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    text: 'Button',
    loading: false,
    className: 'custom-class',
    title: 'Button with Custom Class',
    name: '',
    type: 'button',
    disabled: false,
  },
};

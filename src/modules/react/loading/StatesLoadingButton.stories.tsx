import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StatesLoadingButton from './StatesLoadingButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example2/StatesLoadingButton',
  component: StatesLoadingButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    idleText: { control: 'text' },
    loadingText: { control: 'text' },
    successText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClickAsync arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClickAsync: fn(() => new Promise((resolve) => setTimeout(resolve, 2000))) },
} satisfies Meta<typeof StatesLoadingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Idle: Story = {
  args: {
    title: 'Idle Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    title: 'Success Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    idleText: 'Click me',
    loadingText: 'Loading...',
    successText: 'Success!',
    disabled: true,
  },
};

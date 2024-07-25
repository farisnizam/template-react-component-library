import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { nextIcon } from '@modules/icons';

const exampleSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-2.6-.35-4.68-2.44-5.03-5.03H5v-2h1.97c.35-2.6 2.43-4.68 5.03-5.03V5h2v1.97c2.6.35 4.68 2.43 5.03 5.03H19v2h-1.97c-.35 2.6-2.43 4.68-5.03 5.03V19h-2v-1.07z" fill="currentColor"/></svg>`;


const meta: Meta<typeof Button> = {
  title: 'Example3/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    text: { control: 'text' },
    title: { control: 'text' },
    icon: { control: 'text' },
    iconPosition: { control: 'radio', options: ['left', 'right'] },
    style: { control: 'select', options: [
      'primary',
      'primary-large',
      'primary-contrast',
      'secondary',
      'secondary-orange',
      'ui-selectable-gray',
      'ui-contrast',
      'bar',
      'bar-icon-xl',
      'bar-contrast',
      'bar-orange-icon'
    ]},
    type: { control: 'radio', options: ['button', 'submit'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconAnimation: { control: 'radio', options: ['rotate', 'none'] },
  },
  args: { onClick: action('clicked') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
    style: 'primary',
    icon: exampleSvg,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    style: 'secondary',
    icon: exampleSvg,
  },
};

export const Large: Story = {
  args: {
    text: 'Button',
    style: 'primary-large',
    icon: exampleSvg,
  },
};

export const Small: Story = {
  args: {
    text: 'Button',
    style: 'bar',
    icon: exampleSvg,
  },
};

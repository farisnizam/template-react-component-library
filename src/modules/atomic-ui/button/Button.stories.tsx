import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { pinningIcon } from '@modules/icons';

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
    icon: pinningIcon,
  },
};

export const PrimaryContras: Story = {
  args: {
    text: 'Button',
    style: 'primary-contrast',
    icon: pinningIcon,
  },
};

export const PrimaryLarge: Story = {
  args: {
    text: 'Button',
    style: 'primary-large',
    icon: pinningIcon,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    style: 'secondary',
    icon: pinningIcon,
  },
};

export const SecondaryOrange: Story = {
  args: {
    text: 'Button',
    style: 'secondary-orange',
    icon: pinningIcon,
  },
};

export const UISelectableGray: Story = {
  args: {
    text: 'Button',
    style: 'ui-selectable-gray',
    icon: pinningIcon,
  },
};

export const UIContrast: Story = {
  args: {
    text: 'Button',
    style: 'ui-contrast',
    icon: pinningIcon,
  },
};


export const BarIconXL: Story = {
  args: {
    text: 'Button',
    style: 'bar-icon-xl',
    icon: pinningIcon,
  },
};

export const Bar: Story = {
  args: {
    text: 'Button',
    style: 'bar',
    icon: pinningIcon,
  },
};

export const BarOrangeIcon: Story = {
  args: {
    text: 'Button',
    style: 'bar-orange-icon',
    icon: pinningIcon,
  },
};

export const BarContrast: Story = {
  args: {
    text: 'Button',
    style: 'bar-contrast',
    icon: pinningIcon,
  },
};



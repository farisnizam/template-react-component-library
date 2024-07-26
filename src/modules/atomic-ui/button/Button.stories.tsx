import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { nextIcon } from '@modules/icons';

const exampleSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 16 13" enable-background="new 0 0 16 13" xml:space="preserve"><g transform="translate(480 0)"><path d="M-475.25 7.5c0 1.8 1.45 3.25 3.25 3.25 1.8 0 3.25-1.45 3.25-3.25 0-1.79-1.45-3.25-3.25-3.25C-473.8 4.25-475.25 5.71-475.25 7.5zM-465 2h-3.5c-0.25-1-0.5-2-1.5-2h-4c-1 0-1.25 1-1.5 2h-3.5c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1V3C-464 2.45-464.45 2-465 2zM-472 11.94c-2.45 0-4.44-1.99-4.44-4.44 0-2.45 1.99-4.44 4.44-4.44 2.45 0 4.44 1.99 4.44 4.44C-467.56 9.95-469.55 11.94-472 11.94zM-465 5h-2V4h2V5z"/></g></svg>`;


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

export const PrimaryContras: Story = {
  args: {
    text: 'Button',
    style: 'primary-contrast',
    icon: exampleSvg,
  },
};

export const PrimaryLarge: Story = {
  args: {
    text: 'Button',
    style: 'primary-large',
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

export const SecondaryOrange: Story = {
  args: {
    text: 'Button',
    style: 'secondary-orange',
    icon: exampleSvg,
  },
};

export const UISelectableGray: Story = {
  args: {
    text: 'Button',
    style: 'ui-selectable-gray',
    icon: exampleSvg,
  },
};

export const UIContrast: Story = {
  args: {
    text: 'Button',
    style: 'ui-contrast',
    icon: exampleSvg,
  },
};


export const BarIconXL: Story = {
  args: {
    text: 'Button',
    style: 'bar-icon-xl',
    icon: exampleSvg,
  },
};

export const Bar: Story = {
  args: {
    text: 'Button',
    style: 'bar',
    icon: exampleSvg,
  },
};

export const BarOrangeIcon: Story = {
  args: {
    text: 'Button',
    style: 'bar-orange-icon',
    icon: exampleSvg,
  },
};

export const BarContrast: Story = {
  args: {
    text: 'Button',
    style: 'bar-contrast',
    icon: exampleSvg,
  },
};



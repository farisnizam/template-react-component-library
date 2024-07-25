import type { Meta, StoryObj } from "@storybook/react";
import PulseLoadingAnimation from "./PulseLoadingAnimation";

const meta = {
  title: "Example2/PulseLoadingAnimation",
  component: PulseLoadingAnimation,
  parameters: {
    layout: "centered",
    backgrounds: { default: 'dark' }, // Set default background for this story
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PulseLoadingAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PulseLoading: Story = {};

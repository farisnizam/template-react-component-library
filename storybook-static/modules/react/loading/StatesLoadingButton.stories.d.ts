import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('./StatesLoadingButton').StatesLoadingButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        className: {
            control: "text";
        };
        title: {
            control: "text";
        };
        idleText: {
            control: "text";
        };
        loadingText: {
            control: "text";
        };
        successText: {
            control: "text";
        };
        disabled: {
            control: "boolean";
        };
    };
    args: {
        onClickAsync: import('@vitest/spy').Mock<[], Promise<any>>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Idle: Story;
export declare const Loading: Story;
export declare const Success: Story;
export declare const Disabled: Story;

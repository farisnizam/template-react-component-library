import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('./LoadingButtonDummy').ButtonWithLoadingProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        text: {
            control: "text";
        };
        loading: {
            control: "boolean";
        };
        className: {
            control: "text";
        };
        title: {
            control: "text";
        };
        name: {
            control: "text";
        };
        type: {
            control: "radio";
            options: string[];
        };
        disabled: {
            control: "boolean";
        };
    };
    args: {
        onClick: import('@vitest/spy').Mock<[], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Loading: Story;
export declare const Disabled: Story;
export declare const CustomClass: Story;

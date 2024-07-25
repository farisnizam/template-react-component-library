import { default as React, KeyboardEventHandler, MouseEventHandler } from '../../../../../node_modules/react';

interface IconButtonProps {
    className?: string;
    title?: string;
    icon?: string;
    style?: 'black-static' | 'orange-static' | 'orange-hover' | 'gray-orange-hover' | 'orange-bordered-hover' | 'platform-bar-control';
    size?: 50 | 40 | 30 | 'fill-height';
    onClick: MouseEventHandler<HTMLButtonElement>;
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};

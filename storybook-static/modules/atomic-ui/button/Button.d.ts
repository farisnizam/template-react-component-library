import { MouseEventHandler } from '../../../../node_modules/react';

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    text?: string;
    title?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    style?: 'primary' | 'primary-large' | 'primary-contrast' | 'secondary' | 'secondary-orange' | 'ui-selectable-gray' | 'ui-contrast' | 'bar' | 'bar-icon-xl' | 'bar-contrast' | 'bar-orange-icon';
    type?: 'button' | 'submit';
    selected?: boolean;
    disabled?: boolean;
    id?: string;
    iconAnimation?: 'rotate' | 'none';
};
declare const Button: import('../../../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;

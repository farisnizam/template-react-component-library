import { default as React } from '../../../../node_modules/react';

export interface ButtonWithLoadingProps {
    text: string;
    loading?: boolean;
    className?: string;
    onClick?: () => void;
    title?: string;
    name?: string;
    form?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}
declare const ButtonWithLoading: React.FC<ButtonWithLoadingProps>;
export default ButtonWithLoading;

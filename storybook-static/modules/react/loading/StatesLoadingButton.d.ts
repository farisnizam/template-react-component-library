import { default as React } from '../../../../node_modules/react';

export interface StatesLoadingButtonProps {
    className?: string;
    title: string;
    idleText: string;
    loadingText: string;
    successText: string;
    onClickAsync: () => Promise<any>;
    disabled?: boolean;
}
declare const StatesLoadingButton: React.FC<StatesLoadingButtonProps>;
export default StatesLoadingButton;

import { MenuOptions } from '../menus/options-menu/types';

interface ButtonWithOptionsProps {
    text: string;
    icon: string;
    title?: string;
    tooltip?: string;
    style: 'primary-with-options' | 'platform-bar-with-options' | 'platform-bar-contrast';
    disabled?: boolean;
    onClick: () => void;
    options: MenuOptions;
    id?: string;
}
declare const ButtonWithOptions: import('../../../../node_modules/react').ForwardRefExoticComponent<ButtonWithOptionsProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ButtonWithOptions;

import { default as React } from '../../../../node_modules/react';
import { MenuOption } from '../menus/options-menu/types';

interface ButtonWithMainMenuAndOptionsProps {
    text: string;
    icon: string;
    style: 'platform-bar-wmmao-contrast' | 'platform-bar';
    title?: string;
    disabled?: boolean;
    optionsMenuMaxWidth?: number;
    menu: React.ReactNode;
    onClick: () => void;
    options: MenuOption[];
    id?: string;
}
declare const ButtonWithMainMenuAndOptions: React.ForwardRefExoticComponent<ButtonWithMainMenuAndOptionsProps & React.RefAttributes<HTMLDivElement>>;
export default ButtonWithMainMenuAndOptions;

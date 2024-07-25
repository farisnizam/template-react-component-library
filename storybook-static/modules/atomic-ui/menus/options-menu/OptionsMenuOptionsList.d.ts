import { default as React } from '../../../../../node_modules/react';
import { MenuOption } from './types';

interface OptionsMenuOptionsListProps {
    options: MenuOption[];
    onClose: () => void;
}
/**
 * Load a list of options of multiple types
 *
 * @param {OptionsMenuOptionsListProps} props
 * @returns {JSX.Element}
 */
export declare const OptionsMenuOptionsList: React.FC<OptionsMenuOptionsListProps>;
export {};

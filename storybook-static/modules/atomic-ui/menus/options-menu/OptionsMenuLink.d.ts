import { default as React } from '../../../../../node_modules/react';

interface OptionsMenuLinkProps {
    icon: string;
    href: string;
    text: string;
    tip?: string;
    target?: string;
    highlight?: boolean;
    disabled?: boolean;
}
export declare const OptionsMenuLink: React.FC<OptionsMenuLinkProps>;
export {};

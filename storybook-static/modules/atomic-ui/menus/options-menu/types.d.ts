export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';
export interface MenuOptionBasis {
    text: string;
    tip?: string;
    icon?: string;
    disabled?: boolean;
}
export interface MenuOptionClick extends MenuOptionBasis {
    type: 'onClick';
    onClick: () => void;
}
export interface MenuOptionLink extends MenuOptionBasis {
    type: 'link';
    href: string;
    target?: LinkTarget;
}
export interface MenuOptionSub extends MenuOptionBasis {
    type: 'sub';
    sub: MenuOptions;
}
export interface MenuOptionSubLinks extends MenuOptionBasis {
    type: 'sub-links';
    sub: MenuOptionsLinks;
}
export interface MenuOptionDivider {
    type: 'divider';
}
export type MenuOption = MenuOptionDivider | MenuOptionClick | MenuOptionLink | MenuOptionSub | MenuOptionSubLinks;
export type MenuOptions = MenuOption[];
export type MenuOptionsLinks = (MenuOptionLink | MenuOptionDivider)[];

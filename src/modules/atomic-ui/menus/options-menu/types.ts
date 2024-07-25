// /**
//  * @typedef {Object} MenuOption_Basis
//  * @property {string} text is displayed
//  * @property {string=} tip shown on hover tip
//  * @property {string=} icon svg
//  * @property {boolean=} disabled
//  */

// /**
//  * @typedef {'_blank'|'_parent'|'_self'|'_top'} LinkTarget
//  */

// /**
//  * @typedef {(MenuOption_Basis & { type: 'onClick', onClick: () => void })} MenuOption_Click
//  * @typedef {(MenuOption_Basis & { type: 'link', href: string, target?: LinkTarget })} MenuOption_Link
//  * @typedef {(MenuOption_Basis & { type: 'sub', sub: MenuOptions })} MenuOption_Sub
//  * @typedef {(MenuOption_Basis & { type: 'sub-links', sub: MenuLinkOptions })} MenuOption_SubLinks
//  * @typedef {{ type: 'divider' }} MenuOption_Divider
//  */

// /**
//  * @typedef {( MenuOption_Divider | MenuOption_Click | MenuOption_Link | MenuOption_Sub | MenuOption_SubLinks )} MenuOption
//  */

// /**
//  * @typedef {Array<MenuOption>} MenuOptions
//  * @typedef {Array<MenuOption_Link|MenuOption_Divider>} MenuOptions_Links
//  */

// export default null


export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

export interface MenuOptionBasis {
  text: string; // is displayed
  tip?: string; // shown on hover tip
  icon?: string; // svg
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

export type MenuOption =
  | MenuOptionDivider
  | MenuOptionClick
  | MenuOptionLink
  | MenuOptionSub
  | MenuOptionSubLinks;

export type MenuOptions = MenuOption[];
export type MenuOptionsLinks = (MenuOptionLink | MenuOptionDivider)[];

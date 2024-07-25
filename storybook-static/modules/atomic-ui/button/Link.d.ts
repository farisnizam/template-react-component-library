import { AnchorHTMLAttributes } from '../../../../node_modules/react';

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
    href: string;
    text?: string;
    linkStyle?: 'secondary' | 'secondary-contrast' | 'like-input';
    behavior?: 'normal' | 'back';
    title?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    target?: '_blank';
    disabled?: boolean;
}
declare const Link: import('../../../../node_modules/react').ForwardRefExoticComponent<LinkProps & import('../../../../node_modules/react').RefAttributes<HTMLAnchorElement>>;
export default Link;

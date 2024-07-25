import { default as React, ReactElement, ReactNode } from '../../../../../node_modules/react';

interface ButtonWithMenuProps {
    button: ReactElement;
    menu: ReactNode;
    yOffset?: number;
    delay?: number;
}
export default function ButtonWithMenu({ button, menu, yOffset, delay }: ButtonWithMenuProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};

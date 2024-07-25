import { default as React, MutableRefObject, ReactNode } from '../../../../../node_modules/react';

interface MenuProps {
    targetRef: MutableRefObject<HTMLElement | null>;
    yOffset?: number;
    children: ReactNode;
}
export declare const Menu: React.FC<MenuProps>;
export {};

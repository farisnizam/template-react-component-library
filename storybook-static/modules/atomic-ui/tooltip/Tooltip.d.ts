import { default as React, ReactElement } from '../../../../node_modules/react';

interface TooltipProps {
    children: ReactElement;
    text: string;
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;

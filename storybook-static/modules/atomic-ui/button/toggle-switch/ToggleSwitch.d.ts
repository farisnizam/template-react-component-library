interface ToggleSwitchProps {
    id?: string;
    isToggled: boolean;
    onToggle: (v: boolean) => void;
    text?: string;
    title?: string;
    disabled?: boolean;
    style: 'bar' | 'popup' | 'bar-inline';
    color?: 'orange' | 'green';
}
declare const ToggleSwitch: import('../../../../../node_modules/react').ForwardRefExoticComponent<ToggleSwitchProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ToggleSwitch;

import { ReactNode, MouseEvent } from 'react';
interface HDropdownItemButtonProps {
    children: ReactNode;
    optionValue: unknown;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>, optionValue: unknown) => void;
    className?: string;
}
declare const HDropdownItemButton: {
    ({ children, disabled, optionValue, onClick, className, ...props }: HDropdownItemButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HDropdownItemButton;

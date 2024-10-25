import { RefObject, ReactNode, MouseEvent, CSSProperties } from 'react';
interface ListPositionType {
    top: number;
    bottom: number;
    left: number;
    right: number;
    clientWidth: number;
    clientHeight: number;
}
interface HDropdownAreaContext {
    onClickedDropdownButton: () => void;
    isActiveList: boolean;
    listPosition: ListPositionType;
    dropdownListRef: RefObject<HTMLDivElement>;
    dropdownButtonRef: RefObject<HTMLButtonElement>;
    onClickedDropdownItemButton: (e: MouseEvent<HTMLButtonElement>, currentValue: unknown) => void;
    isButtonDisabled: boolean;
}
declare const HDropdownAreaContext: import('react').Context<HDropdownAreaContext | undefined>;
export interface HDropdownAreaProviderRef {
    selectedValue: any;
    dropdownAreaWidth: number;
    isActiveList: boolean;
}
declare const HDropdownArea: import('react').ForwardRefExoticComponent<{
    children: ({ isActiveList, dropdownAreaWidth }: {
        isActiveList: boolean;
        dropdownAreaWidth: number;
    }) => ReactNode;
    initialSelectedValue?: unknown | null;
    onBlurDropdown?: () => void;
    onChangeSelectedValue?: (selectedValue: any) => void;
    scrollEventRefs?: string[];
    disabled?: boolean;
    style?: CSSProperties;
} & import('react').RefAttributes<HDropdownAreaProviderRef>>;
export { HDropdownAreaContext };
export default HDropdownArea;

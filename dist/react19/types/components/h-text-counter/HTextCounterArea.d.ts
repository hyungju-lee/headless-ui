import { default as React, ChangeEvent, ReactNode } from 'react';
interface HTextCounterAreaInputProps {
    tag?: 'input';
    maxLength: number;
    value?: string;
    onUpdateModelValue?: (value: string) => void;
    children: (slotProps: {
        currentLength: number;
        maxLength: number;
        inputRef: React.RefObject<HTMLInputElement | null>;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        value: string;
    }) => ReactNode;
}
interface HTextCounterAreaTextareaProps {
    tag: 'textarea';
    maxLength: number;
    value?: string;
    onUpdateModelValue?: (value: string) => void;
    children: (slotProps: {
        currentLength: number;
        maxLength: number;
        inputRef: React.RefObject<HTMLTextAreaElement | null>;
        onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
        value: string;
    }) => ReactNode;
}
type HTextCounterAreaProps = HTextCounterAreaInputProps | HTextCounterAreaTextareaProps;
declare const HTextCounterArea: React.FC<HTextCounterAreaProps>;
export default HTextCounterArea;

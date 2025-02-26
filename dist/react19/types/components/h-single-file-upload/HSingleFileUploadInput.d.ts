import { default as React } from 'react';
interface HSingleFileUploadInputProps {
    id: string;
    name?: string;
    sizeLimit?: number;
    accept?: string;
    onSizeExceeded?: (size: number, currentSize: number) => void;
    onFileUploaded?: (file: File) => void;
    onCorruptedFile?: (file: File) => void;
    style?: React.CSSProperties;
    className?: string;
}
declare const HSingleFileUploadInput: React.FC<HSingleFileUploadInputProps>;
export default HSingleFileUploadInput;

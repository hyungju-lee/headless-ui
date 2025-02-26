import { default as React } from 'react';
interface HMultipleFileUploadInputProps {
    id: string;
    name?: string;
    totalSizeLimit?: number;
    lengthLimit?: number;
    sizeLimit?: number;
    accept?: string;
    onTotalSizeExceeded?: (limit: number, currentSize: number) => void;
    onLengthExceeded?: (limit: number, currentLength: number) => void;
    onSizeExceeded?: (limit: number, removedFiles: File[]) => void;
    onFileUploaded?: (newFiles: File[]) => void;
    onCorruptedFile?: (file: File) => void;
}
declare const HMultipleFileUploadInput: React.FC<HMultipleFileUploadInputProps>;
export default HMultipleFileUploadInput;

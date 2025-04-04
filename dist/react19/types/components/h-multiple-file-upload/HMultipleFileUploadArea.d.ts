import { default as React, ReactNode } from 'react';
export interface FileContextProps {
    files: File[] | null;
    setFiles: (files: File[]) => void;
}
export declare const FileContext: React.Context<FileContextProps | undefined>;
interface UploadedFileInfo {
    file: File;
    thumbnail: string;
}
interface HMultipleFileUploadAreaProps {
    value?: File[] | [];
    children: (props: {
        uploadedFilesInfo: UploadedFileInfo[];
        fileRemoveHandler: (file: File) => void;
        allFileRemoveHandler: () => void;
    }) => ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
declare const HMultipleFileUploadArea: React.FC<HMultipleFileUploadAreaProps>;
export default HMultipleFileUploadArea;
export type { UploadedFileInfo };

import { default as React, ReactNode } from 'react';
export interface FileContextProps {
    file: File | null;
    setFile: (file: File | null) => void;
}
export declare const FileContext: React.Context<FileContextProps | undefined>;
interface HSingleFileUploadAreaProps {
    children: (props: {
        thumbnail: string;
        fileRemoveHandler: () => void;
    }) => ReactNode;
    value: File | null;
    /** 비디오 썸네일을 생성할 시점 (초). 기본값은 0 (첫 프레임) */
    currentTime?: number;
}
declare const HSingleFileUploadArea: React.FC<HSingleFileUploadAreaProps>;
export default HSingleFileUploadArea;

import { ReactNode, MouseEvent } from 'react';
export type AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE = {
    event: Event | MouseEvent;
    result: boolean;
    originalFunc: (ev: Event | MouseEvent) => void;
};
interface AuthProps {
    isAuth?: string;
    noAuthList?: string[];
    originalEventTarget?: string;
    originalEventTargetEvent?: string | null;
    onAuthVerificationResult?: (payload: AUTH_VERIFICATION_RESULT_ARGUMENTS_TYPE) => void;
    children?: ReactNode;
}
declare const AuthVerifyWrapper: {
    (props: AuthProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default AuthVerifyWrapper;

interface DATA_CHANGE_VERIFICATION_RESULT_ARGUMENTS_TYPE {
    event: Event;
    result: boolean;
    originalFunc: (e: Event) => void;
    href?: string;
    target?: string;
}
export type { DATA_CHANGE_VERIFICATION_RESULT_ARGUMENTS_TYPE };

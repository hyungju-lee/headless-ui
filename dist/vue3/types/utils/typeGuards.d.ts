import { VNode } from 'vue';
type BoundingClientRectType = {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
};
interface PrivacyLogOption {
    privacyLog: any;
}
declare const isTouchStartEvent: (event: Event) => event is TouchEvent;
declare const isTouchMoveEvent: (event: Event) => event is TouchEvent;
declare const isMouseMoveEvent: (event: Event) => event is MouseEvent;
declare const isMouseDownEvent: (event: Event) => event is MouseEvent;
declare const isClickEvent: (event: Event) => event is MouseEvent;
declare const isHTMLElement: (target: EventTarget | string | null | Node | undefined) => target is HTMLElement;
declare const isHTMLInputElement: (target: EventTarget | null) => target is HTMLInputElement;
declare const getElementDimensions: (element: HTMLElement) => BoundingClientRectType;
declare const hasPrivacyLog: (option: unknown) => option is PrivacyLogOption;
declare const isString: (value: unknown) => value is string;
declare const areAllValuesStrings: (obj: Record<string, unknown>) => obj is Record<string, string>;
declare const isStringOrStringArray: (value: any) => value is string | string[];
declare const isObject: (value: any) => value is Record<string, any>;
declare const isAnchorTag: (element: unknown) => element is HTMLAnchorElement;
declare const isClickableElement: (element: unknown) => element is HTMLElement;
declare const isVNode: (obj: unknown) => obj is VNode;
declare const hasOnClickLink: (vnode: any) => vnode is VNode & {
    componentInstance: {
        onClickLink: (e: Event, except?: boolean) => void;
    };
};
export { isTouchStartEvent, isTouchMoveEvent, isMouseMoveEvent, isHTMLElement, getElementDimensions, BoundingClientRectType, isMouseDownEvent, isHTMLInputElement, hasPrivacyLog, areAllValuesStrings, isStringOrStringArray, isString, isClickEvent, isObject, isAnchorTag, isClickableElement, isVNode, hasOnClickLink, };

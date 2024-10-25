import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    elValue: {
        type: PropType<{
            value: unknown;
        }>;
        required: true;
    };
    colIndex: {
        type: NumberConstructor;
        required: true;
    };
    rowIndex: {
        type: NumberConstructor;
        required: true;
    };
}>, {
    isSelected: import('vue').Ref<boolean, boolean>;
    clickKanbanCard: (e: Event) => void;
    isDraggable: import('vue').Ref<boolean, boolean>;
    dragMouseDown: (e: Event) => void;
    kanbanCard: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("event-click" | "emit-value")[], "event-click" | "emit-value", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    elValue: {
        type: PropType<{
            value: unknown;
        }>;
        required: true;
    };
    colIndex: {
        type: NumberConstructor;
        required: true;
    };
    rowIndex: {
        type: NumberConstructor;
        required: true;
    };
}>> & Readonly<{
    "onEvent-click"?: ((...args: any[]) => any) | undefined;
    "onEmit-value"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;

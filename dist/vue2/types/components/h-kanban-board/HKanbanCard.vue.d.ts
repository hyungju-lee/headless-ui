import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
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
}, {
    isSelected: import('vue').Ref<boolean>;
    clickKanbanCard: (e: Event) => void;
    isDraggable: import('vue').Ref<boolean>;
    dragMouseDown: (e: Event) => void;
    kanbanCard: import('vue').Ref<HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("event-click" | "emit-value")[], string, Readonly<import('vue').ExtractPropTypes<{
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
}>>, {}>;
export default _default;

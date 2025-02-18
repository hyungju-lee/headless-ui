interface ListPositionType {
    top: number;
    bottom: number;
    left: number;
    right: number;
    clientWidth: number;
    clientHeight: number;
}
interface ListItemType {
    value: string | number | Record<string, any> | unknown[];
    name: string;
}
export type { ListPositionType, ListItemType };

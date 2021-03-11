import { Direction, Size } from "src/types";

export type TableProps = React.PropsWithChildren<{}>;

export type TableHeadProps = React.PropsWithChildren<{
    height?: Size;
    useSticky?: boolean;
}>;

export type TableRowProps = React.PropsWithChildren<{
    height?: Size;
    onSelect?: (dot: any) => void;
}>;

export type TableColProps = React.PropsWithChildren<{
    useSort?: boolean;
    direction?: Direction | null;
    onSortClick?: (direction: Direction) => void;
}>;

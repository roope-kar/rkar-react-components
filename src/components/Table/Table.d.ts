import React from 'react';
import { Direction, Size } from "src/types";

export type TableProps = React.PropsWithChildren<{}>;

export type TableHeadProps = React.PropsWithChildren<{
    height?: Size;
    useSticky?: boolean;
}>;

export type TableRowProps = React.PropsWithChildren<{
    height?: Size;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    selected?: boolean;
}>;

export type TableColProps = React.PropsWithChildren<{
    flexBasis?: number | 'auto';
    flexGrow?: number;
    flexShrink?: number;
}>;

export type TableSelectColProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TableSortColProps = React.PropsWithChildren<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    direction: Direction;
}>

import React from 'react';
import { Direction, Size } from "src/types";

export type TableProps = React.PropsWithChildren<{
    name: string,
    description: string
}>;

export type TableRowProps = React.PropsWithChildren<{
    height?: Size;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}>;

export type TableRowGroupProps = React.PropsWithChildren<{
    children: React.ReactElement<TableRowProps> | React.ReactElement<TableRowProps>[];
}>;

export type TableCellProps = React.PropsWithChildren<{
    role: 'cell' | 'columnheader';
}>;

export type TableSelectCellProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TableSortCellProps = React.PropsWithChildren<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    direction: Direction;
}>

import React from 'react';
import { Direction } from 'src/types';

export type TableProps = React.PropsWithChildren<{
    ariaLabel: string;
    role?: 'table' | 'grid';
    children: [
        React.ReactElement<TableCaptionProps>,
        React.ReactElement<TableHeadProps>,
        React.ReactElement<TableBodyProps>
    ]
}>;

export type TableCaptionProps = React.PropsWithChildren<{}>;

export type TableHeadProps = {
    children: React.ReactElement<TableHeadCellProps> | React.ReactElement<TableHeadCellProps>[];
};

export type TableHeadCellProps = React.PropsWithChildren<{}>;

export type TableBodyProps = {
    children: React.ReactElement<TableRowProps> | React.ReactElement<TableRowProps>[];
};

export type TableRowProps = {
    children: React.ReactElement<TableCellProps> | React.ReactElement<TableCellProps>[];
};

export type TableCellProps = React.PropsWithChildren<{}>;

export type TableSortCellProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    direction: Direction;
};

export type TableSelectCellProps = React.InputHTMLAttributes<HTMLInputElement>;

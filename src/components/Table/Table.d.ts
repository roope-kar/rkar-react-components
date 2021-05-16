import React from 'react';
import { Size } from "src/types";
import type { DataGridCellProps, DataGridRowGroupProps, DataGridRowProps } from 'src/components/DataGrid/DataGrid.d';

export type TableProps = React.PropsWithChildren<{
    name: string;
    description: string;
    children: React.ReactElement<TableRowGroupProps | DataGridRowGroupProps> | React.ReactElement<TableRowGroupProps | DataGridRowGroupProps>[];
    role?: string;
}>;

export type TableRowGroupProps = {
    children: React.ReactElement<TableRowProps | DataGridRowProps> | React.ReactElement<TableRowProps | DataGridRowProps>[];
};

export type TableRowProps = {
    height?: Size;
    children: React.ReactElement<TableCellProps | DataGridCellProps> | React.ReactElement<TableCellProps | DataGridCellProps>[];
};

export type TableCellProps = React.PropsWithChildren<{
    role?: 'cell' | 'columnheader' | 'gridcell';
    tabIndex?: number;
}>;

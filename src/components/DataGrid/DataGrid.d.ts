import React from 'react';
import { Direction } from 'src/types';

export type DataGridProps = React.PropsWithChildren<{
    ariaLabel: string;
    role?: 'table' | 'grid';
    children: [
        React.ReactElement<DataGridCaptionProps>,
        React.ReactElement<DataGridHeadProps>,
        React.ReactElement<DataGridBodyProps>
    ]
}>;

export type DataGridCaptionProps = React.PropsWithChildren<{}>;

export type DataGridHeadProps = {
    children: React.ReactElement<DataGridHeadCellProps> | React.ReactElement<DataGridHeadCellProps>[];
};

export type DataGridHeadCellProps = React.PropsWithChildren<{}>;

export type DataGridBodyProps = {
    children: React.ReactElement<DataGridRowProps> | React.ReactElement<DataGridRowProps>[];
};

export type DataGridRowProps = {
    children: React.ReactElement<DataGridCellProps> | React.ReactElement<DataGridCellProps>[];
};

export type DataGridCellProps = React.PropsWithChildren<{}>;

export type DataGridSortCellProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    direction: Direction;
};

export type DataGridSelectCellProps = React.InputHTMLAttributes<HTMLInputElement>;

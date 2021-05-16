import React from "react";
import type { Direction } from "src/types";
import type { TextInputProps } from "src/components/TextInput/TextInput.d";

export type DataGridProps = {
    name: string;
    description: string;
    children: React.ReactElement<DataGridRowGroupProps> | React.ReactElement<DataGridRowGroupProps>[];
};

export type DataGridRowGroupProps = {
    children: React.ReactElement<DataGridRowProps> | React.ReactElement<DataGridRowProps>[];
}

export type DataGridRowProps = {
    index?: number;
    children: React.ReactElement<DataGridCellProps> | React.ReactElement<DataGridCellProps>[];
}

export type DataGridCellProps = React.PropsWithChildren<{
    index?: number;
}>;

export type DataGridSearchCellProps = TextInputProps;

export type DataGridSortCellProps = React.PropsWithChildren<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    direction: Direction;
}>


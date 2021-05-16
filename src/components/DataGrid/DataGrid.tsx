import React from 'react';
import styled from 'styled-components';
import { Table, ArrowIcon, TextInput } from 'src/components';
import type { DataGridCellProps, DataGridProps, DataGridRowGroupProps, DataGridRowProps, DataGridSearchCellProps, DataGridSortCellProps } from 'src/components/DataGrid/DataGrid.d';

// TODO:
// Right Arrow: Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.
// Left Arrow: Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.
// Down Arrow: Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.
// Up Arrow: Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.
// Page Down:  scrolling so the bottom row in the currently visible set of rows becomes the first visible row. If focus is in the last row, focus does not move.
// Page Up: In example 3, moves focus up 5 rows, scrolling so the top row in the currently visible set of rows becomes the last visible row. If focus is in the first row of the grid, focus does not move.
// Home: moves focus to the first cell in the row that contains focus.
// End:	moves focus to the last cell in the row that contains focus.
// Control + Home:	moves focus to the first cell in the first row.
// Control + End:	moves focus to the last cell in the last row.

const DataGrid: React.FunctionComponent<DataGridProps> & {
    RowGroup: React.FunctionComponent<DataGridRowGroupProps>;
    Row: React.FunctionComponent<DataGridRowProps>;
    Cell: React.FunctionComponent<DataGridCellProps>;
    SortCell: React.FunctionComponent<DataGridSortCellProps>;
    SearchCell: React.FunctionComponent<DataGridSearchCellProps>;
} = ({ name, description, children }: DataGridProps) => (
    <Table role={'grid'} name={name} description={description} aria-rowcount={-1} aria-colcount={-1} aria-readonly aria-multiselectable={false}>{children}</Table>
);

DataGrid.RowGroup = ({ children }: DataGridRowGroupProps) => (
    <Table.RowGroup>{children}</Table.RowGroup>
);

DataGrid.Row = ({ children, index = -1 }: DataGridRowProps) => (
    <Table.Row aria-rowindex={index}>{children}</Table.Row>
);

DataGrid.Cell = ({ children, index = -1 }: DataGridCellProps) => (
    <Table.Cell role={'gridcell'} tabIndex={-1} aria-colindex={index}>{children}</Table.Cell>
);

const SortCellTrigger = styled.span``;

DataGrid.SortCell = ({ children, direction, onClick }: DataGridSortCellProps) => (
    <Table.Cell role={'columnheader'} aria-sort={direction}>
        <SortCellTrigger role={'button'} tabIndex={-1} onClick={onClick}>
            {children}
            <ArrowIcon direction={direction} />
        </SortCellTrigger>
    </Table.Cell>
);;

DataGrid.SearchCell = ({ onChange }: DataGridSearchCellProps) => (
    <Table.Cell role={'columnheader'}>
        <TextInput onChange={onChange} />
    </Table.Cell>
);

export default DataGrid;

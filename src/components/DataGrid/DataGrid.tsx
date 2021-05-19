import React from 'react';
import type {
    DataGridProps,
    DataGridCaptionProps,
    DataGridHeadProps,
    DataGridHeadCellProps,
    DataGridBodyProps,
    DataGridRowProps,
    DataGridCellProps,
    DataGridSortCellProps,
    DataGridSelectCellProps,
} from 'src/components/DataGrid/DataGrid.d';
import styled from 'styled-components';
import theme from 'src/theme';
import { ArrowIcon } from 'src/components';

const DataGridContainer = styled.table`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
  background: ${(props) => props.theme.background.default};
  overflow: hidden;
  border-radius: 3px;
`;

DataGridContainer.defaultProps = {
    theme,
};

const DataGrid: React.FunctionComponent<DataGridProps> & {
    Caption: React.FunctionComponent<DataGridCaptionProps>;
    Head: React.FunctionComponent<DataGridHeadProps>;
    HeadCell: React.FunctionComponent<DataGridHeadCellProps>;
    Body: React.FunctionComponent<DataGridBodyProps>;
    Row: React.FunctionComponent<DataGridRowProps>;
    Cell: React.FunctionComponent<DataGridCellProps>;
    SelectCell: React.FunctionComponent<DataGridSelectCellProps>;
    SortCell: React.FunctionComponent<DataGridSortCellProps>;
} = ({ children, ariaLabel }: DataGridProps) => (
    <DataGridContainer role={'grid'} aria-label={ariaLabel}>{children}</DataGridContainer>
);

const CaptionContainer = styled.caption<DataGridCaptionProps>`
  text-align: left;
`;

DataGrid.Caption = function DataGridCaption({ children }: DataGridCaptionProps) {
    return (
        <CaptionContainer>{children}</CaptionContainer>
    );
}

const HeadContainer = styled.thead<DataGridHeadProps>``;

DataGrid.Head = function DataGridHead({ children }: DataGridHeadProps) {
    return (
        <HeadContainer>
            <DataGrid.Row>{children}</DataGrid.Row>
        </HeadContainer>
    );
}

const HeadCellContainer = styled.th<DataGridHeadCellProps>``;

DataGrid.HeadCell = function DataGridHeadCell({ children }: DataGridHeadCellProps) {
    return <HeadCellContainer>{children}</HeadCellContainer>
};

const BodyContainer = styled.tbody<DataGridBodyProps>``;

DataGrid.Body = function DataGridBody({ children }: DataGridBodyProps) {
    return <BodyContainer>{children}</BodyContainer>
};

const RowContainer = styled.tr<DataGridRowProps>``;

RowContainer.defaultProps = { theme };

DataGrid.Row = function DataGridRow({ children }: DataGridRowProps) {
    return <RowContainer>{children}</RowContainer>;
};

const CellContainer = styled.td<DataGridCellProps>``;

DataGrid.Cell = function DataGridCol({ children }: DataGridCellProps) {
    return <CellContainer role={'gridcell'}>{children}</CellContainer>;
};

DataGrid.SelectCell = ({ onClick }: DataGridSelectCellProps) => (
    <td>
        <input type={'checkbox'} onClick={onClick}></input>
    </td>
);

DataGrid.SortCell = ({ children, direction, onClick }: DataGridSortCellProps) => (
    <th aria-sort={direction}>
        <span role={'button'} tabIndex={-1} onClick={onClick}>
            {children}
            <ArrowIcon direction={direction} />
        </span>
    </th>
);

export default DataGrid;

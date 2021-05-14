import React from 'react';
import { Size } from 'src/types';
import { Checkbox, ArrowIcon } from 'src/components';
import type {
  TableProps,
  TableRowProps,
  TableRowGroupProps,
  TableCellProps,
  TableSelectCellProps,
  TableSortCellProps,
} from 'src/components/Table/Table.d';
import styled from 'styled-components';
import theme from 'src/theme';

const getRowHeight = (height: Size): string => {
  switch (height) {
    case 'small':
      return '40px';
    case 'medium':
      return '48px';
    case 'large':
      return '56px';
  }
};

const TableContainer = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
  background: ${(props) => props.theme.background.default};
  overflow: hidden;
  border-radius: 3px;
`;

TableContainer.defaultProps = {
  theme,
};

const TableDescription = styled.div``;

const Table: React.FunctionComponent<TableProps> & {
  Row: React.FunctionComponent<TableRowProps>;
  RowGroup: React.FunctionComponent<TableRowGroupProps>;
  Cell: React.FunctionComponent<TableCellProps>;
  SelectCol: React.FunctionComponent<TableSelectCellProps>;
  SortCol: React.FunctionComponent<TableSortCellProps>;
} = ({ children, name, description }: TableProps) => (
  <TableContainer role={"table"} aria-label={name} aria-describedby={`${name}-table-description`} aria-rowcount={-1}>
    <TableDescription id={`${name}-table-description`}>{description}</TableDescription>
    {children}
  </TableContainer>
);

const RowContainer = styled.div<TableRowProps>`
  height: ${(props) => getRowHeight(props.height || 'medium')};
`;

RowContainer.defaultProps = {
  height: 'medium',
  theme,
};

Table.Row = function TableRow({ height = 'medium', onClick, children }: TableRowProps) {
  return (
    <RowContainer role={'row'} height={height} onClick={onClick}>
      {children}
    </RowContainer>
  );
};

const RowGroup = styled.div<TableRowGroupProps>``;

Table.RowGroup = function TableRowGroup({ children }: TableRowGroupProps) {
  return <RowGroup role={'rowgroup'}>{children}</RowGroup>;
};

const CellContainer = styled.div<TableCellProps>``;

CellContainer.defaultProps = {};

Table.Cell = function TableCol({ role = 'cell', ...props }: TableCellProps) {
  return <CellContainer role={role} {...props} />;
};

Table.SelectCol = function TableSelectCol(props: TableSelectCellProps) {
  return (
    <Table.Cell role={'columnheader'}>
      <Checkbox {...props} />
    </Table.Cell>
  );
};

Table.SortCol = function TableSortCol({ children, direction }: TableSortCellProps) {
  return (
    <Table.Cell role={'columnheader'}>
      {children}
      <ArrowIcon direction={direction} />
    </Table.Cell>
  );
};

export default Table;

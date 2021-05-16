import React from 'react';
import { Size } from 'src/types';
import type {
  TableProps,
  TableRowProps,
  TableRowGroupProps,
  TableCellProps,
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
} = ({ children, name, description, role = 'table' }: TableProps) => (
  <TableContainer role={role} aria-label={name} aria-describedby={`${name}-table-description`} aria-rowcount={-1} aria-colcount={-1}>
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

Table.Row = function TableRow({ height = 'medium', children }: TableRowProps) {
  return (
    <RowContainer role={'row'} height={height}>
      {children}
    </RowContainer>
  );
};

const RowGroup = styled.div<TableRowGroupProps>``;

Table.RowGroup = function TableRowGroup({ children }: TableRowGroupProps) {
  return <RowGroup role={'rowgroup'}>{children}</RowGroup>;
};

const CellContainer = styled.div<TableCellProps>``;

Table.Cell = function TableCol({ role = 'cell', tabIndex = 0, children }: TableCellProps) {
  return <CellContainer role={role} tabIndex={tabIndex}>{children}</CellContainer>;
};

export default Table;

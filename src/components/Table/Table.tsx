import React from 'react';
import type {
  TableProps,
  TableCaptionProps,
  TableHeadProps,
  TableHeadCellProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableSortCellProps,
  TableSelectCellProps,
} from 'src/components/Table/Table.d';
import styled from 'styled-components';
import theme from 'src/theme';
import { ArrowIcon } from 'src/components';

const TableContainer = styled.table`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
  background: ${(props) => props.theme.background.default};
  overflow: hidden;
  border-radius: 3px;
`;

TableContainer.defaultProps = {
  theme,
};

const Table: React.FunctionComponent<TableProps> & {
  Caption: React.FunctionComponent<TableCaptionProps>;
  Head: React.FunctionComponent<TableHeadProps>;
  HeadCell: React.FunctionComponent<TableHeadCellProps>;
  Body: React.FunctionComponent<TableBodyProps>;
  Row: React.FunctionComponent<TableRowProps>;
  Cell: React.FunctionComponent<TableCellProps>;
  SelectCell: React.FunctionComponent<TableSelectCellProps>;
  SortCell: React.FunctionComponent<TableSortCellProps>;
} = ({ children, ariaLabel }: TableProps) => (
  <TableContainer aria-label={ariaLabel}>{children}</TableContainer>
);

const CaptionContainer = styled.caption<TableCaptionProps>`
  text-align: left;
`;

Table.Caption = function TableCaption({ children }: TableCaptionProps) {
  return (
    <CaptionContainer>{children}</CaptionContainer>
  );
}

const HeadContainer = styled.thead<TableHeadProps>``;

Table.Head = function TableHead({ children }: TableHeadProps) {
  return (
    <HeadContainer>
      <Table.Row>{children}</Table.Row>
    </HeadContainer>
  );
}

const HeadCellContainer = styled.th<TableHeadCellProps>``;

Table.HeadCell = function TableHeadCell({ children }: TableHeadCellProps) {
  return <HeadCellContainer>{children}</HeadCellContainer>
};

const BodyContainer = styled.tbody<TableBodyProps>``;

Table.Body = function TableBody({ children }: TableBodyProps) {
  return <BodyContainer>{children}</BodyContainer>
};

const RowContainer = styled.tr<TableRowProps>``;

RowContainer.defaultProps = { theme };

Table.Row = function TableRow({ children }: TableRowProps) {
  return <RowContainer>{children}</RowContainer>;
};

const CellContainer = styled.td<TableCellProps>``;

Table.Cell = function TableCol({ children }: TableCellProps) {
  return <CellContainer>{children}</CellContainer>;
};

Table.SelectCell = ({ onClick }: TableSelectCellProps) => (
  <td>
    <input type={'checkbox'} onClick={onClick}></input>
  </td>
);

Table.SortCell = ({ children, direction, onClick }: TableSortCellProps) => (
  <th aria-sort={direction}>
      <span role={'button'} tabIndex={-1} onClick={onClick}>
          {children}
          <ArrowIcon direction={direction} />
      </span>
  </th>
);

export default Table;

import React from 'react';
import { GroupComponent, Size } from 'src/types';
import { Checkbox, ArrowIcon } from 'src/components';
import type {
  TableProps,
  TableRowProps,
  TableHeadProps,
  TableColProps,
  TableSelectColProps,
  TableSortColProps,
} from 'src/components/Table/Table.d';
import styled from 'styled-components';
import theme from 'src/theme';

// Use container to share props in table
const TableContext = React.createContext<{
  secret: string;
}>({
  secret: 'test',
});

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

/**
 * TODO:
 *  - Initial Layout [OK]
 *  - Selectable Rows [OK]
 *  - Sticky Header [OK]
 *  - MultiSelect Actions
 *  - Sort column [OK]
 *  - Highlight Row [OK]
 *  - Pagination
 *  - Responsive: Collapse columns into 1 column
 *  - Responsive: Action content should be full screen
 *  - Row heights: Condensed: 40px, Regular: 48px, Relaxed: 56px [OK]
 */

const TableContainer = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
`;

TableContainer.defaultProps = {
  theme,
};

const Table: GroupComponent<TableProps> = ({ children }: TableProps) => {
  const context = { secret: 'test' };
  return (
    <TableContext.Provider value={context}>
      <TableContainer>{children}</TableContainer>
    </TableContext.Provider>
  );
};

const Head = styled.div<TableHeadProps>`
  display: flex;
  flex-flow: nowrap row;
  height: ${(props) => getRowHeight(props.height || 'medium')};
  position: ${(props) => (props.useSticky ? 'sticky' : 'static')};
  top: ${(props) => (props.useSticky ? '0' : 'unset')};
  border-bottom: 2px solid ${(props) => props.theme.background.default};
`;

Head.defaultProps = {
  height: 'medium',
  useSticky: false,
  theme,
};

Table.Head = Head;

const Body = styled.div``;

Table.Body = Body;

const RowContainer = styled.div<TableRowProps>`
  display: flex;
  flex-flow: nowrap row;
  height: ${(props) => getRowHeight(props.height || 'medium')};
  border-bottom: 1px solid ${(props) => props.theme.background.default};
  &:hover {
    background: ${(props) => props.theme.background.default};
  }
`;

RowContainer.defaultProps = {
  height: 'medium',
  theme,
};

Table.Row = function TableRow({ height = 'medium', onClick, children }: TableRowProps) {
  return (
    <RowContainer height={height} onClick={onClick}>
      {children}
    </RowContainer>
  );
};

const ColContainer = styled.div<TableColProps>`
  display: flex;
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  align-items: center;
  padding: 0px 16px;
`;

ColContainer.defaultProps = {
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 0,
};

Table.Col = function TableCol(props: TableColProps) {
  return <ColContainer {...props} />;
};

Table.SelectCol = function TableSelectCol(props: TableSelectColProps) {
  return (
    <ColContainer flexGrow={0}>
      <Checkbox {...props} />
    </ColContainer>
  );
};

Table.SortCol = function TableSortCol({ children, direction, onClick }: TableSortColProps) {
  return <ColContainer onClick={onClick}>
    {children}
    <ArrowIcon direction={direction} />
  </ColContainer>;
};

export default Table;

import React from 'react';
import { GroupComponent, Size } from 'src/types';
import type { TableProps, TableRowProps, TableHeadProps, TableColProps } from 'src/components/Table/Table.d';
import styled from 'styled-components';

// Use container to share props in table
const TableContext = React.createContext<{}>({});

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
 *  - Pagination
 *  - Virtualized Table
 *  - Responsive: Collapse columns into 1 column
 *  - Responsive: Action content should be full screen
 *  - Row heights: Condensed: 40px, Regular: 48px, Relaxed: 56px [OK]
 */

const TableContainer = styled.div``;

const Table: GroupComponent<TableProps> = ({ children }: TableProps) => {
  const context = {};
  return (
    <TableContext.Provider value={context}>
      <TableContainer>{children}</TableContainer>
    </TableContext.Provider>
  );
};

const Head = styled.div<TableHeadProps>`
  height: ${props => props.height};
  position: ${props => props.useSticky ? 'sticky' : 'static'};
  top: ${props => props.useSticky ? '0' : 'unset'};
`;

Head.defaultProps = {
  height: 'medium',
  useSticky: false
}

Table.Head = Head;

const Body = styled.div``;

Table.Body = Body;

const RowContainer = styled.div<TableRowProps>`
  height: ${(props) => getRowHeight(props.height || 'medium')};
`;

RowContainer.defaultProps = {
  height: 'medium',
};

Table.Row = function TableRow({ height = 'medium', onSelect, children }: TableRowProps) {
  return <RowContainer height={height}>
    {children}
  </RowContainer>
}

const ColContainer = styled.div``;

Table.Col = function TableCol({ useSort = false, onSortClick, direction = null, children }: TableColProps) {
  return <ColContainer>{children}</ColContainer>
};

export default Table;

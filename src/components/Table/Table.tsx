import { GroupComponent, Size } from 'src/types';
import type { TableProps, RowProps } from 'src/components/Table/Table.d';
import styled from 'styled-components';

const getRowHeight = (size: Size) => {
  switch (size) {
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
 *  - Selectable Rows
 *  - MultiSelect Actions
 *  - Sort column
 *  - Pagination
 *  - Resize Column
 *  - Customize columns
 *  - Virtualized Table
 *  - Responsive: Collapse columns into 1 column
 *  - Responsive: Action content should be full screen
 *  - Row heights: Condensed: 40px, Regular: 48px, Relaxed: 56px
 *  - Fixed Header: Maintain context while scrolling
 *  -
 */

const Table: GroupComponent<TableProps> = styled.div``;

const Head = styled.div``;

const Body = styled.div``;

const Row = styled.div<RowProps>`
  height: ${(props) => getRowHeight(props.size || 'medium')};
`;

Row.defaultProps = {
  size: 'medium',
};

const Col = styled.div``;

Table.Head = Head;

Table.Body = Body;

Table.Row = Row;

Table.Col = Col;

export default Table;

import React from 'react';
import styled from 'styled-components';
import type { DataGridProps, DataGridRowProps, DataGridCellProps } from 'src/components/DataGrid/DataGrid.d';
import type { GroupComponent } from 'src/types';
import { useKeyboardNavigation } from 'src/hooks';
import theme from 'src/theme';

const Container = styled.div.attrs({
  role: 'grid',
})<DataGridProps>`
  color: ${(props) => props.theme?.color.default};
  font-family: ${(props) => props.theme.font.secondary};
  display: flex;
  flex-direction: column;
`;

Container.defaultProps = {
  theme,
};

const Row = styled.div.attrs({
  role: 'row',
  tabIndex: 0,
})<DataGridRowProps>`
  display: flex;
  flex-flow: nowrap row;
`;

const Cell = styled.div.attrs({
  role: 'cell',
  tabIndex: 0,
})<DataGridCellProps>`
  flex-grow: 1;
  flex-basis: ${(props) => props.width}px;
`;

const DataGrid: GroupComponent<DataGridProps> = ({ children }: DataGridProps) => {
  const ref = React.createRef<HTMLDivElement>();
  useKeyboardNavigation(ref);
  return <Container ref={ref}>{children}</Container>;
};

DataGrid.Row = Row;

DataGrid.Cell = Cell;

export default DataGrid;

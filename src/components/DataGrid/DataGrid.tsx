import React from 'react';
import styled from 'styled-components';
import type { DataGridProps, DataGridRowProps, DataGridCellProps } from 'src/components/DataGrid/DataGrid.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Container = styled.div.attrs({
  role: 'grid',
})<DataGridProps>`
  color: rgba(255, 255, 255, 0.9);
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
  return <Container>{children}</Container>;
};

DataGrid.Row = Row;

DataGrid.Cell = Cell;

export default DataGrid;

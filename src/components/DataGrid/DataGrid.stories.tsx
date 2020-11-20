import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DataGrid } from 'src/components';
import 'src/types';

export default {
  title: 'DataGrid',
  component: DataGrid,
  parameters: {
    jest: ['DataGrid.test.tsx'],
  },
} as Meta;

export const SimpleDataGrid: React.FunctionComponent = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <DataGrid>
      {data.map((dot) => (
        <DataGrid.Row key={dot}>
          <DataGrid.Cell width={'1fr'}>1</DataGrid.Cell>
          <DataGrid.Cell width={'1fr'}>2</DataGrid.Cell>
          <DataGrid.Cell width={'1fr'}>3</DataGrid.Cell>
          <DataGrid.Cell width={'1fr'}>4</DataGrid.Cell>
          <DataGrid.Cell width={'1fr'}>5</DataGrid.Cell>
        </DataGrid.Row>
      ))}
    </DataGrid>
  );
};

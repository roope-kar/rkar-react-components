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
          <DataGrid.Cell width={'1fr'}>{dot}</DataGrid.Cell>
        </DataGrid.Row>
      ))}
    </DataGrid>
  );
};

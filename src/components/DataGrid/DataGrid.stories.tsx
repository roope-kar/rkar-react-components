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

type UserData = Array<{ name: string; age: number; weight: number }>;

const userData: UserData = [
  { name: 'alice', age: 21, weight: 60 },
  { name: 'bob', age: 22, weight: 80 },
  { name: 'charlie', age: 26, weight: 100 },
];

export const SimpleTable: React.FunctionComponent = () => {
  const [data] = React.useState<UserData>(userData);
  return (
    <DataGrid ariaLabel={'My Epic DataGrid :)'}>
      <DataGrid.Caption>Sample description of the DataGrid</DataGrid.Caption>
      <DataGrid.Head>
        <DataGrid.HeadCell>Name</DataGrid.HeadCell>
        <DataGrid.HeadCell>Age</DataGrid.HeadCell>
        <DataGrid.HeadCell>Weight</DataGrid.HeadCell>
      </DataGrid.Head>
      <DataGrid.Body>
        {data.map((dot, index) => (
          <DataGrid.Row key={index}>
            <DataGrid.Cell>{dot.name}</DataGrid.Cell>
            <DataGrid.Cell>{dot.age}</DataGrid.Cell>
            <DataGrid.Cell>{dot.weight}</DataGrid.Cell>
          </DataGrid.Row>
        ))}
      </DataGrid.Body>
    </DataGrid>
  );
};

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Table } from 'src/components';
import 'src/types';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    jest: ['Table.test.tsx'],
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
    <Table ariaLabel={'My Epic Table :)'}>
      <Table.Caption>Sample description of the Table</Table.Caption>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Age</Table.HeadCell>
        <Table.HeadCell>Weight</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data.map((dot, index) => (
          <Table.Row key={index}>
            <Table.Cell>{dot.name}</Table.Cell>
            <Table.Cell>{dot.age}</Table.Cell>
            <Table.Cell>{dot.weight}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

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
    <Table>
      <Table.Head>
        <Table.Col>Name</Table.Col>
        <Table.Col>Age</Table.Col>
        <Table.Col>Weight</Table.Col>
      </Table.Head>
      <Table.Body>
        {data.map((dot, index) => (
          <Table.Row key={index}>
            <Table.Col>{dot.name}</Table.Col>
            <Table.Col>{dot.age}</Table.Col>
            <Table.Col>{dot.weight}</Table.Col>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

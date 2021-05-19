import React from 'react';
import { Table } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Table', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(
      <Table ariaLabel={'My Epic Table :)'}>
        <Table.Caption>Sample description of the Table</Table.Caption>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Age</Table.HeadCell>
          <Table.HeadCell>Weight</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice</Table.Cell>
            <Table.Cell>21</Table.Cell>
            <Table.Cell>80kg</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  });
});

import React from 'react';
import { Table } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Table', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Table name={'Test'} description={'Test Description'}>
      <Table.RowGroup>
        <Table.Row>
          <Table.Cell>123</Table.Cell>
        </Table.Row>
      </Table.RowGroup>
    </Table>);
  });
});

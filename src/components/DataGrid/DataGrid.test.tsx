import React from 'react';
import { DataGrid } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('DataGrid', () => {
  afterEach(cleanup);
  test('renders', () => {
    render(<DataGrid name={'Test'} description={'Test Description'}>
      <DataGrid.RowGroup>
        <DataGrid.Row>
          <DataGrid.Cell>123</DataGrid.Cell>
        </DataGrid.Row>
      </DataGrid.RowGroup>
    </DataGrid>);
  });
});

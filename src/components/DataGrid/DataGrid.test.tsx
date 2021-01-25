import React from 'react';
import { DataGrid } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('DataGrid', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(
      <DataGrid>
        <DataGrid.Row>
          <DataGrid.Cell>1</DataGrid.Cell>
          <DataGrid.Cell>2</DataGrid.Cell>
          <DataGrid.Cell>3</DataGrid.Cell>
          <DataGrid.Cell>4</DataGrid.Cell>
          <DataGrid.Cell>5</DataGrid.Cell>
        </DataGrid.Row>
      </DataGrid>,
    ).container as HTMLElement;

    expect(container).toBeDefined;
  });
});

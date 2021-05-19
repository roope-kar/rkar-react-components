import React from 'react';
import { DataGrid } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('DataGrid', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(
      <DataGrid ariaLabel={'My Epic DataGrid :)'}>
        <DataGrid.Caption>Sample description of the DataGrid</DataGrid.Caption>
        <DataGrid.Head>
          <DataGrid.HeadCell>Name</DataGrid.HeadCell>
          <DataGrid.HeadCell>Age</DataGrid.HeadCell>
          <DataGrid.HeadCell>Weight</DataGrid.HeadCell>
        </DataGrid.Head>
        <DataGrid.Body>
          <DataGrid.Row>
            <DataGrid.Cell>Alice</DataGrid.Cell>
            <DataGrid.Cell>21</DataGrid.Cell>
            <DataGrid.Cell>80kg</DataGrid.Cell>
          </DataGrid.Row>
        </DataGrid.Body>
      </DataGrid>
    );
  });
});

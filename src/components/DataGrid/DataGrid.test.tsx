import React from 'react';
import { DataGrid } from 'src/components';
import { render, cleanup } from '@testing-library/react';
import theme from 'src/theme';

describe('DataGrid', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<DataGrid></DataGrid>).container;

    expect(container).toBeDefined;
  });
});

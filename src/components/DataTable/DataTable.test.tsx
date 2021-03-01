import React from 'react';
import { DataTable } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('DataTable', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<DataTable />);
  });
});

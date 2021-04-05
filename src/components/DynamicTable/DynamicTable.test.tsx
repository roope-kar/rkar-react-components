import React from 'react';
import { DynamicTable } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('DynamicTable', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<DynamicTable />);
  });
});

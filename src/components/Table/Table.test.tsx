import React from 'react';
import { Table } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Table', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Table />);
  });
});

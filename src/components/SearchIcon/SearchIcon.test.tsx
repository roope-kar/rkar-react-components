import React from 'react';
import { SearchIcon } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('SearchIcon', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<SearchIcon />);
  });
});

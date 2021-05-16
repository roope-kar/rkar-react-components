import React from 'react';
import { SearchInput } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('SearchInput', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<SearchInput />);
  });
});

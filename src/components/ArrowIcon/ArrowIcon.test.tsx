import React from 'react';
import { ArrowIcon } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('ArrowIcon', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<ArrowIcon direction={'asc'} />);
  });
});

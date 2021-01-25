import React from 'react';
import { Badge } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Badge', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Badge intent={'none'}>Default</Badge>);
  });
});

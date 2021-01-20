import React from 'react';
import { Switch } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Switch', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Switch />);
  });
});

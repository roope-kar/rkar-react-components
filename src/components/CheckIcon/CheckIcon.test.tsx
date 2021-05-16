import React from 'react';
import { CheckIcon } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('CheckIcon', () => {
  afterEach(cleanup);
  test('renders', () => {
    render(<CheckIcon />);
  });
});

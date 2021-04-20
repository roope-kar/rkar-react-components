import React from 'react';
import { CloseIcon } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('CloseIcon', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<CloseIcon />);
  });
});

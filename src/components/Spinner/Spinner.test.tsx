import React from 'react';
import { Spinner } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Spinner', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Spinner>Test</Spinner>);
  });
});

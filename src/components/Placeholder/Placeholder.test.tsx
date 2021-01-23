import React from 'react';
import { Placeholder } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Placeholder', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Placeholder>Test</Placeholder>);
  });
});

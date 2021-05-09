import React from 'react';
import { Tooltip } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Tooltip>Test</Tooltip>);
  });
});

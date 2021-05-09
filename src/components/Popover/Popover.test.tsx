import React from 'react';
import { Popover } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Popover', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Popover content={'Popover!'}>Test</Popover>)
  });
});

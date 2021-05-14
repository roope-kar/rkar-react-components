import React from 'react';
import { PopoverTooltip } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<PopoverTooltip content={'Tooltip with some content'}>Test</PopoverTooltip>);
  });
});

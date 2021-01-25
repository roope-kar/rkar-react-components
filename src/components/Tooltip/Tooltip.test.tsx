import React from 'react';
import { Tooltip } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<Tooltip>Test</Tooltip>).container as HTMLElement;

    expect(getByText(container, 'Test').textContent).toStrictEqual('Test');
  });
});

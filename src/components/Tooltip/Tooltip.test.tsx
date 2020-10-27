import React from 'react';
import { Tooltip } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<Tooltip>Test</Tooltip>).container;

    expect(getByText(container, 'Test').textContent).toStrictEqual('Test');
  });
});

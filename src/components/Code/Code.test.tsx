import React from 'react';
import { Code } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Code', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<Code>Test</Code>).container as HTMLElement;

    expect(getByText(container, 'Test').textContent).toStrictEqual('Test');
  });
});

import React from 'react';
import { ProgressBar } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('ProgressBar', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<ProgressBar value={40} />).container;
    expect(getByText(container, '40%').textContent).toStrictEqual('40%');
  });
});

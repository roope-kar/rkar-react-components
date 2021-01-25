import React from 'react';
import { ProgressBar } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('ProgressBar', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<ProgressBar value={40} />).container as HTMLElement;
    expect(getByText(container, '40%').textContent).toStrictEqual('40%');
  });
});

import React from 'react';
import { Divider } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Divider', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<Divider>20</Divider>).container as HTMLElement;

    expect(getByText(container, '20').textContent).toStrictEqual('20');
  });
});

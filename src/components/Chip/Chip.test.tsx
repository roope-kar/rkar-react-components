import React from 'react';
import { Chip } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Chip', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<Chip>20</Chip>).container;

    expect(getByText(container, '20').textContent).toStrictEqual('20');
  });
});

import React from 'react';
import { Heading } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Heading', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container: HTMLElement = render(<Heading size={'medium'}>Heading</Heading>).container;

    expect(getByText(container, 'Heading').textContent).toStrictEqual('Heading');
  });
});

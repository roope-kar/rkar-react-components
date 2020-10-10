import React from 'react';
import { Text } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Text', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container: HTMLElement = render(<Text>My Text</Text>).container;

    expect(getByText(container, 'My Text').textContent).toStrictEqual('My Text');
  });
});

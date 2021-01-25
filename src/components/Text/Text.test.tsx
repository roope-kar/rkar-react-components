import React from 'react';
import { Text } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Text', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container = render(<Text>My Text</Text>).container as HTMLElement;

    expect(getByText(container, 'My Text').textContent).toStrictEqual('My Text');
  });
});

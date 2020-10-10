import React from 'react';
import { SubText } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('SubText', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container: HTMLElement = render(<SubText>My SubText</SubText>).container;

    expect(getByText(container, 'My SubText').textContent).toStrictEqual('My SubText');
  });
});

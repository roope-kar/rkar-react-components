import React from 'react';
import { Link } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Link', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container: HTMLElement = render(<Link>My Link</Link>).container;

    expect(getByText(container, 'My Link').textContent).toStrictEqual('My Link');
  });
});

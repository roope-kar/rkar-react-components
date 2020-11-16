import React from 'react';
import { Badge } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Badge', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(
<Badge>Default</Badge>,
    ).container;

    expect(getByText(container, 'Default').textContent).toStrictEqual('Default');
  });

});

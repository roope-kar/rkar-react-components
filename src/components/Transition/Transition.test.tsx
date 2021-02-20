import React from 'react';
import { Transition } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Transition', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<Transition>Test</Transition>).container as HTMLElement;

    expect(getByText(container, 'Test').textContent).toStrictEqual('Test');
  });
});

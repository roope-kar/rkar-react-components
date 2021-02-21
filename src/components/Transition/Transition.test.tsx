import React from 'react';
import { Transition } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Transition', () => {
  afterEach(cleanup);

  test('renders', () => {
    const A: React.FunctionComponent = () => <div>Test</div>;
    const container = render(
      <Transition cssRule={'opacity 0.1s linear'}>
        <A />
      </Transition>,
    ).container as HTMLElement;

    expect(getByText(container, 'Test').textContent).toStrictEqual('Test');
  });
});

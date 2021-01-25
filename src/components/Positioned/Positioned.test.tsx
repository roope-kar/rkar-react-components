import React from 'react';
import { Positioned } from 'src/components/Positioned';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Positioned', () => {
  afterEach(cleanup);

  test('renders', () => {
    const baseElement = render(
      <Positioned x={100} y={100}>
        Positioned Div
      </Positioned>,
    ).baseElement as HTMLElement;

    expect(getByText(baseElement, 'Positioned Div')).toBeTruthy;
  });
});

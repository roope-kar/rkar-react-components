import React from 'react';
import { Heading } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Heading', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<Heading size={'medium'}>Heading</Heading>).container as HTMLElement;

    expect(getByText(container, 'Heading').textContent).toStrictEqual('Heading');
  });

  test('should work without ThemeProvider', () => {});

  test('should read font from ThemeProvider', () => {});
});

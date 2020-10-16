import React from 'react';
import { Link } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Link', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container: HTMLElement = render(<Link>My Link</Link>).container;
    expect(getByText(container, 'My Link').textContent).toStrictEqual('My Link');
  });

  test('should work without ThemeProvider', () => {

  });

  test('should read font from ThemeProvider', () => {

  });

  test('should read color from ThemeProvider', () => {

  });

});

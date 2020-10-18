import React from 'react';
import { Button } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import theme from 'src/theme';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(
      <ThemeProvider theme={theme}>
        <Button size={'medium'} intent={'none'} onClick={() => null}>
          Default
        </Button>
      </ThemeProvider>,
    ).container;

    expect(getByText(container, 'Default').textContent).toStrictEqual('Default');
  });

  test('should call onClick callback on click', () => {
    const onClick = jest.fn();

    const container: HTMLElement = render(
      <Button size={'medium'} intent={'none'} onClick={() => null}>
        Default
      </Button>,
    ).container;

    fireEvent.click(getByText(container, 'Default'));

    expect(onClick).toHaveBeenCalled;
  });

  test('should work without ThemeProvider', () => {});

  test('should read font from ThemeProvider', () => {});

  test('should read colors from ThemeProvider', () => {});
});

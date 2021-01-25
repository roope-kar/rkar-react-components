import React from 'react';
import { Button } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Button size={'medium'} appearance={'primary'} intent={'none'} onClick={() => null}>
          Default
        </Button>
      </ThemeProvider>,
    ).container as HTMLElement;

    expect(getByText(container, 'Default').textContent).toStrictEqual('Default');
  });

  test('should call onClick callback on click', () => {
    const onClick = jest.fn();

    const container = render(
      <Button size={'medium'} appearance={'primary'} intent={'none'} onClick={() => null}>
        Default
      </Button>,
    ).container as HTMLElement;

    fireEvent.click(getByText(container, 'Default'));

    expect(onClick).toHaveBeenCalled;
  });

  test('should work without ThemeProvider', () => {});

  test('should read font from ThemeProvider', () => {});

  test('should read colors from ThemeProvider', () => {});
});

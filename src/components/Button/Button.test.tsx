import React from 'react';
import { Button } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

describe('Button', () => {
  const theme: DefaultTheme = {
    font: {
      primary: 'Roboto',
      secondary: 'Open Sans',
    },
    color: {
      success: '#38C76E',
      warning: '#CBAF34',
      danger: '#d52a3a',
      info: '#439cbc',
      none: '#3450cb',
    },
  };

  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(
      <ThemeProvider theme={theme}>
        <Button size={'medium'} intent={'none'}>
          Default
        </Button>
      </ThemeProvider>,
    ).container;

    expect(getByText(container, 'Default').textContent).toStrictEqual('Default');
  });

  test('should work without ThemeProvider', () => {});

  test('should read font from ThemeProvider', () => {});

  test('should read colors from ThemeProvider', () => {});
});

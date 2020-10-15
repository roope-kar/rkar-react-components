import React from 'react';
import { Button } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

describe('Button', () => {
  const theme: DefaultTheme = {
    fontFamily: 'Roboto',
    color: {
      success: '#38C76E',
      warning: '#CBAF34',
      danger: '#d52a3a',
      info: '#439cbc',
      none: '#3450cb',
    },
  };

  afterEach(cleanup);

  it('renders', () => {
    const container: HTMLElement = render(
      <ThemeProvider theme={theme}>
        <Button size={'medium'} intent={'none'}>
          Default
        </Button>
      </ThemeProvider>,
    ).container;

    expect(getByText(container, 'Default').textContent).toStrictEqual('Default');
  });
});

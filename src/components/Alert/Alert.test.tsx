import React from 'react';
import { Alert } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';

describe('Alert', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(
      <ThemeProvider theme={theme}>
        <Alert title={'Please note'} appearance={'primary'} intent={'none'} theme={theme}>
          Alert Description
        </Alert>
      </ThemeProvider>,
    ).container;

    expect(getByText(container, 'Alert Description').textContent).toStrictEqual('Alert Description');
  });

});

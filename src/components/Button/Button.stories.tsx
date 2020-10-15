import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from 'src/components/Button';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import 'src/types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

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

export const SmallButton: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Button size={'small'} intent={'none'}>
      Small Button
    </Button>
  </ThemeProvider>
);

export const MediumButton: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Button size={'medium'} intent={'none'}>
      Medium Button
    </Button>
  </ThemeProvider>
);

export const LargeButton: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Button size={'large'} intent={'none'}>
      Large Button
    </Button>
  </ThemeProvider>
);

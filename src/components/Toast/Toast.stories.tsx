import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Toast } from 'src/components/Toast';
import 'src/types';

export default {
  title: 'Toast',
  component: Toast,
  parameters: {
    jest: ['Toast.test.tsx'],
  },
} as Meta;

export const SimpleToast: React.FunctionComponent = () => <Toast>let x = 123;</Toast>;

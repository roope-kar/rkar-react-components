import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Spinner } from 'src/components/Spinner';
import 'src/types';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    jest: ['Spinner.test.tsx'],
  },
} as Meta;

export const SimpleSpinner: React.FunctionComponent = () => <Spinner />;

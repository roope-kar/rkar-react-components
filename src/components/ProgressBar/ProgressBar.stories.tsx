import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ProgressBar } from 'src/components/ProgressBar';
import 'src/types';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  parameters: {
    jest: ['ProgressBar.test.tsx'],
  },
} as Meta;

export const SimpleProgressBar: React.FunctionComponent = () => (
  <div style={{ width: '500px' }}>
    <ProgressBar value={40} />
  </div>
);

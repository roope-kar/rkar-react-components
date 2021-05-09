import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tooltip } from 'src/components';

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    jest: ['Tooltip.test.tsx'],
  },
} as Meta;

export const SimpleTooltip: React.FunctionComponent = () => <Tooltip>Simple Tooltip</Tooltip>;

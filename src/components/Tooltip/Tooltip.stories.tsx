import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tooltip } from 'src/components/Tooltip';
import 'src/types';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta;

export const SimpleTooltip: React.FunctionComponent = () => <Tooltip>Simple Tooltip</Tooltip>;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Popover } from 'src/components/Popover';
import 'src/types';

export default {
  title: 'Popover',
  component: Popover,
  parameters: {
    jest: ['Popover.test.tsx'],
  },
} as Meta;

export const SimplePopover: React.FunctionComponent = () => <Popover content={'Content!'}>Trigger Popover</Popover>;

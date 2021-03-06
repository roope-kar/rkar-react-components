import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ArrowIcon } from 'src/components/ArrowIcon';
import 'src/types';

export default {
  title: 'ArrowIcon',
  component: ArrowIcon,
  parameters: {
    jest: ['ArrowIcon.test.tsx'],
  },
} as Meta;

export const ArrowIconUp: React.FunctionComponent = () => <ArrowIcon direction={'asc'} />;

export const ArrowIconDown: React.FunctionComponent = () => <ArrowIcon direction={'desc'} />;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { CheckIcon } from 'src/components';
import 'src/types';

export default {
  title: 'CheckIcon',
  component: CheckIcon,
  parameters: {
    jest: ['CheckIcon.test.tsx'],
  },
} as Meta;

export const SimpleCode: React.FunctionComponent = () => <CheckIcon />;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { CloseIcon } from 'src/components/CloseIcon';
import 'src/types';

export default {
  title: 'CloseIcon',
  component: CloseIcon,
  parameters: {
    jest: ['CloseIcon.test.tsx'],
  },
} as Meta;

export const SimpleCloseIcon: React.FunctionComponent = () => <CloseIcon />;

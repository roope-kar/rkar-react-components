import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SearchIcon } from 'src/components';
import 'src/types';

export default {
  title: 'SearchIcon',
  component: SearchIcon,
  parameters: {
    jest: ['SearchIcon.test.tsx'],
  },
} as Meta;

export const SimpleCode: React.FunctionComponent = () => <SearchIcon />;

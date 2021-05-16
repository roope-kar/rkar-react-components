import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SearchInput } from 'src/components/SearchInput';
import 'src/types';

export default {
  title: 'SearchInput',
  component: SearchInput,
  parameters: {
    jest: ['SearchInput.test.tsx'],
  },
} as Meta;

export const SimpleSearchInput: React.FunctionComponent = () => <SearchInput />;

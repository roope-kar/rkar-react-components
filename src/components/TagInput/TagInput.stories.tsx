import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TagInput } from 'src/components/TagInput';
import 'src/types';

export default {
  title: 'TagInput',
  component: TagInput,
  parameters: {
    jest: ['TagInput.test.tsx'],
  },
} as Meta;

export const SimpleTagInput: React.FunctionComponent = () => <TagInput value={'123'}></TagInput>;

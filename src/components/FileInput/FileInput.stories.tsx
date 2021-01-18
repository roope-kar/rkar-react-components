import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FileInput } from 'src/components/FileInput';
import 'src/types';

export default {
  title: 'FileInput',
  component: FileInput,
  parameters: {
    jest: ['FileInput.test.tsx'],
  },
} as Meta;

export const SimpleFileInput: React.FunctionComponent = () => <FileInput label={'Select File'} />;

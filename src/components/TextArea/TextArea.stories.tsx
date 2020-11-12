import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextArea } from 'src/components';
import 'src/types';

export default {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    jest: ['TextArea.test.tsx'],
  },
} as Meta;

export const SimpleTextArea: React.FunctionComponent = () => {
  return <TextArea value={'This is a simple textarea'} readOnly />;
};

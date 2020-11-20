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
  return <TextArea rows={4} value={'This is a simple textarea'} readOnly />;
};

export const ControlledTextArea: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value);
  return <TextArea rows={4} value={value} onChange={handleChange} />;
};

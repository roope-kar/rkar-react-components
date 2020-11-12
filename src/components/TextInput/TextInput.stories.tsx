import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextInput } from 'src/components/TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  parameters: {
    jest: ['TextInput.test.tsx'],
  },
} as Meta;

export const DefaultTextInput: React.FunctionComponent = () => <TextInput value={'123'} readOnly />;

export const ControlledTextInput: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextInput value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
  );
};

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Checkbox } from 'src/components/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    jest: ['Checkbox.test.tsx'],
  },
} as Meta;

export const DefaultCheckbox: React.FunctionComponent = () => <Checkbox value={'true'} checked={true} readOnly />;

export const ControlledCheckbox: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('false');
  return (
    <Checkbox
      value={value}
      checked={value === 'true'}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.checked ? 'true' : 'false')}
    />
  );
};

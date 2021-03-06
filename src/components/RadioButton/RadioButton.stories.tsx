import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RadioButton } from 'src/components';

export default {
  title: 'RadioButton',
  component: RadioButton,
  parameters: {
    jest: ['RadioButton.test.tsx'],
  },
} as Meta;

export const DefaultRadioButton: React.FunctionComponent = () => (
  <div style={{ display: 'flex', flexFlow: 'nowrap row', justifyContent: 'space-around' }}>
    <RadioButton name={'group-1'} value={'1'} />
    <RadioButton name={'group-1'} value={'2'} />
    <RadioButton name={'group-1'} value={'3'} />
  </div>
);

export const ControlledRadioButton: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <div style={{ display: 'flex', flexFlow: 'nowrap row', justifyContent: 'space-around' }}>
      <RadioButton
        name={'group-2'}
        checked={value === '1'}
        value={'1'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      />
      <RadioButton
        name={'group-2'}
        checked={value === '2'}
        value={'2'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      />
      <RadioButton
        name={'group-2'}
        checked={value === '3'}
        value={'3'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      />
    </div>
  );
};

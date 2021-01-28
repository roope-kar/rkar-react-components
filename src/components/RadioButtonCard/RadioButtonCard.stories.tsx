import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RadioButtonCard } from 'src/components';

export default {
  title: 'RadioButtonCard',
  component: RadioButtonCard,
  parameters: {
    jest: ['RadioButtonCard.test.tsx'],
  },
} as Meta;

export const DefaultRadioButtonCard: React.FunctionComponent = () => (
  <RadioButtonCard value={'true'}>
    <RadioButtonCard.Title>Title</RadioButtonCard.Title>
    <RadioButtonCard.Description>Description</RadioButtonCard.Description>
  </RadioButtonCard>
);

export const ControlledRadioButtonCard: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<string>('false');
  const handleClick = () => {
    setValue(value === 'false' ? 'true' : 'false');
  };
  return (
    <RadioButtonCard value={value} onClick={handleClick}>
      <RadioButtonCard.Title>Title</RadioButtonCard.Title>
      <RadioButtonCard.Description>Description</RadioButtonCard.Description>
    </RadioButtonCard>
  );
};

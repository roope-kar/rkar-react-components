import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Switch } from 'src/components/Switch';
import 'src/types';

export default {
  title: 'Switch',
  component: Switch,
  parameters: {
    jest: ['Switch.test.tsx'],
  },
} as Meta;

export const SimpleSwitchOff: React.FunctionComponent = () => <Switch value={'false'} />;

export const SimpleSwitchOn: React.FunctionComponent = () => <Switch value={'true'} />;

export const SimpleControlledSwitch: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<'true' | 'false'>('false');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(!event.target.checked ? 'false' : 'true');
  };
  return <Switch value={value} onChange={handleChange} />;
};

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from 'src/components/Button';
import 'src/types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const SmallButton: React.FunctionComponent = () => (
  <Button size={'small'} intent={'none'}>
    Small Button
  </Button>
);

export const MediumButton: React.FunctionComponent = () => (
  <Button size={'medium'} intent={'none'}>
    Medium Button
  </Button>
);

export const LargeButton: React.FunctionComponent = () => (
  <Button size={'large'} intent={'none'}>
    Large Button
  </Button>
);

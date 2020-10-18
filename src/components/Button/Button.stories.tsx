import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from 'src/components/Button';
import 'src/types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const SmallButton: React.FunctionComponent = () => (
  <Button size={'small'} intent={'primary'} onClick={() => null}>
    Small Button
  </Button>
);

export const MediumButton: React.FunctionComponent = () => (
  <Button size={'medium'} intent={'primary'} onClick={() => null}>
    Medium Button
  </Button>
);

export const LargeButton: React.FunctionComponent = () => (
  <Button size={'large'} intent={'primary'} onClick={() => null}>
    Large Button
  </Button>
);

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Animate } from 'src/components/Animate';
import 'src/types';

export default {
  title: 'Animate',
  component: Animate,
  parameters: {
    jest: ['Animate.test.tsx'],
  },
} as Meta;

export const SimpleAnimate: React.FunctionComponent = () => <Animate />;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Transition } from 'src/components/Transition';
import 'src/types';

export default {
  title: 'Transition',
  component: Transition,
  parameters: {
    jest: ['Transition.test.tsx'],
  },
} as Meta;

export const SimpleTransition: React.FunctionComponent = () => <Transition>let x = 123;</Transition>;

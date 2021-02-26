import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Animate, Text } from 'src/components';
import 'src/types';

export default {
  title: 'Animate',
  component: Animate,
  parameters: {
    jest: ['Animate.test.tsx'],
  },
} as Meta;

export const SimpleAnimate: React.FunctionComponent = () => (
  <Animate>{(count) => <Text>{Math.round(count)}</Text>}</Animate>
);

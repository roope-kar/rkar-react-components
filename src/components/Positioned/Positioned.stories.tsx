import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Positioned } from 'src/components/Positioned';
import 'src/types';

export default {
  title: 'Positioned',
  component: Positioned,
} as Meta;

export const PositionedDiv: React.FunctionComponent = () => (
  <Positioned x={100} y={100}>
    positioned div
  </Positioned>
);

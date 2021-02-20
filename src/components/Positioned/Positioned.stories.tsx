import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Positioned, Toast, Text } from 'src/components';
import 'src/types';

export default {
  title: 'Positioned',
  component: Positioned,
  parameters: {
    jest: ['Positioned.test.tsx'],
  },
} as Meta;

export const PositionedDiv: React.FunctionComponent = () => (
  <Positioned x={100} y={100}>
    <Text>Positioned Text</Text>
  </Positioned>
);

export const PositionedToast: React.FunctionComponent = () => {
  const x = window.innerWidth / 2;
  const y = 0;
  return (
    <Positioned x={x} y={y}>
      <Toast>
        <Text>Hello World!</Text>
      </Toast>
    </Positioned>
  );
};

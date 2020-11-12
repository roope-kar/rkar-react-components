import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tooltip, Positioner, Positioned, Text } from 'src/components';

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    jest: ['Tooltip.test.tsx'],
  },
} as Meta;

export const SimpleTooltip: React.FunctionComponent = () => <Tooltip>Simple Tooltip</Tooltip>;

export const PositionedTooltip: React.FunctionComponent = () => (
  <Positioner
    content={(position) => (
      <Positioned x={position.x} y={position.y}>
        <Tooltip>Positioned Tooltip</Tooltip>
      </Positioned>
    )}
  >
    <Text>I will trigger a tooltip</Text>
  </Positioner>
);

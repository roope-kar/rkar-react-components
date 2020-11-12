import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Positioner } from 'src/components/Positioner';
import 'src/types';

export default {
  title: 'Positioner',
  component: Positioner,
  parameters: {
    jest: ['Positioner.test.tsx'],
  },
} as Meta;

export const PositionedDiv: React.FunctionComponent = () => (
  <Positioner content={() => <div>content</div>}>Positioner for div</Positioner>
);

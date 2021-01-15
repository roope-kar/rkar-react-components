import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Chip } from 'src/components/Chip';
import 'src/types';

export default {
  title: 'Chip',
  component: Chip,
  parameters: {
    jest: ['Chip.test.tsx'],
  },
} as Meta;

export const SimpleChip: React.FunctionComponent = () => <Chip>20</Chip>;

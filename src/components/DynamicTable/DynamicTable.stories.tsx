import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DynamicTable } from 'src/components/DynamicTable';
import 'src/types';

export default {
  title: 'DynamicTable',
  component: DynamicTable,
  parameters: {
    jest: ['DynamicTable.test.tsx'],
  },
} as Meta;

export const SimpleDynamicTable: React.FunctionComponent = () => <DynamicTable />;

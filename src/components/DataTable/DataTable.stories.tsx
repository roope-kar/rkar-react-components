import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DataTable } from 'src/components';
import 'src/types';

export default {
  title: 'DataTable',
  component: DataTable,
  parameters: {
    jest: ['DataTable.test.tsx'],
  },
} as Meta;

export const SimpleDataTable: React.FunctionComponent = () => <DataTable />;

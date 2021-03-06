import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Table } from 'src/components';
import 'src/types';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    jest: ['Table.test.tsx'],
  },
} as Meta;

export const SimpleTable: React.FunctionComponent = () => <Table />;

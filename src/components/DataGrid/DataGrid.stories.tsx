import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DataGrid } from 'src/components';
import 'src/types';

export default {
  title: 'DataGrid',
  component: DataGrid,
} as Meta;

export const SimpleDataGrid: React.FunctionComponent = () => <DataGrid></DataGrid>;

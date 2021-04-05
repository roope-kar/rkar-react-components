import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DynamicForm } from 'src/components/DynamicForm';
import 'src/types';

export default {
  title: 'DynamicForm',
  component: DynamicForm,
  parameters: {
    jest: ['DynamicForm.test.tsx'],
  },
} as Meta;

export const SimpleDynamicForm: React.FunctionComponent = () => <DynamicForm />;

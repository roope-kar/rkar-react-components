import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Code } from 'src/components/Code';
import 'src/types';

export default {
  title: 'Code',
  component: Code,
  parameters: {
    jest: ['Code.test.tsx'],
  },
} as Meta;

export const SimpleCode: React.FunctionComponent = () => <Code>let x = 123;</Code>;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Heading } from 'src/components/Heading';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

export const DefaultHeader: React.FunctionComponent = () => <Heading>Default Heading</Heading>;

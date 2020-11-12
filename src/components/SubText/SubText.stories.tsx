import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SubText } from 'src/components';

export default {
  title: 'SubText',
  component: SubText,
  parameters: {
    jest: ['SubText.test.tsx'],
  },
} as Meta;

export const DefaultSubText: React.FunctionComponent = () => <SubText>Default SubText</SubText>;

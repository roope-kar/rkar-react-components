import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SubText } from 'src/components';

export default {
  title: 'SubText',
  component: SubText,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta;

export const DefaultSubText: React.FunctionComponent = () => <SubText>Default SubText</SubText>;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Text } from 'lib/components';

export default {
    title:  'Text',
    component: Text,
    parameters: {
      backgrounds: {
        values: [
           { name: 'red', value: '#f00', },
           { name: 'green', value: '#0f0', },
           { name: 'blue', value: '#00f', },
        ]
      }
    }
} as Meta;

export const DefaultText = () => (
  <Text>Default</Text>
);

export const AnotherText = () => (
  <Text>Another</Text>
);

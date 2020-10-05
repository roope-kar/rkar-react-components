import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from 'lib/components/Button/Button';

export default {
    title: 'Button',
    component: Button,
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

export const DefaultButton: React.FunctionComponent = () => (
  <Button>Default</Button>
);

export const AnotherButton: React.FunctionComponent = () => (
  <Button>Another</Button>
);

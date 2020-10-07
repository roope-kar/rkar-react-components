import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from 'src/components/Button';

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

export const SmallButton: React.FunctionComponent = () => (
  <Button size={'small'}>Small Button</Button>
);

export const MediumButton: React.FunctionComponent = () => (
  <Button size={'medium'}>Medium Button</Button>
);

export const LargeButton: React.FunctionComponent = () => (
  <Button size={'large'}>Large Button</Button>
);

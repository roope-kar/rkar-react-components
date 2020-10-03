import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from 'lib';

export const PrimaryButton: React.FunctionComponent = () => null;

export const SecondaryButton : React.FunctionComponent = () => null;

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

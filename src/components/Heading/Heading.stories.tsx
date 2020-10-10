import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Heading } from 'src/components/Heading';

export default {
    title: 'Heading',
    component: Heading,
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

export const DefaultHeader: React.FunctionComponent = () => (
    <Heading>Default Heading</Heading>
);

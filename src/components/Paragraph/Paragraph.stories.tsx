import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Paragraph } from 'src/components/Paragraph';

export default {
    title: 'Paragraph',
    component: Paragraph,
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

export const DefaultParagraph: React.FunctionComponent = () => (
    <Paragraph>Default Paragraph</Paragraph>
);

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Paragraph } from 'src/components/Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
} as Meta;

export const DefaultParagraph: React.FunctionComponent = () => <Paragraph>Default Paragraph</Paragraph>;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Paragraph } from 'src/components/Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    jest: ['Paragraph.test.tsx'],
  },
} as Meta;

export const DefaultParagraph: React.FunctionComponent = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit accumsan massa, ac finibus ligula
    tincidunt ut. Curabitur turpis enim, lacinia et tortor non, finibus suscipit magna. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Phasellus hendrerit accumsan massa, ac finibus ligula tincidunt ut. Curabitur turpis
    enim, lacinia et tortor non, finibus suscipit magna.
  </Paragraph>
);

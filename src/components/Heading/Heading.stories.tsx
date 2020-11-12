import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Heading, Paragraph } from 'src/components';

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    jest: ['Heading.test.tsx'],
  },
} as Meta;

export const DefaultHeader: React.FunctionComponent = () => <Heading>Default Heading</Heading>;

export const HeaderAndParagraph: React.FunctionComponent = () => (
  <div style={{ width: 500 }}>
    <Heading>Default Heading</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit accumsan massa, ac finibus ligula
      tincidunt ut. Curabitur turpis enim, lacinia et tortor non, finibus suscipit magna
    </Paragraph>
  </div>
);

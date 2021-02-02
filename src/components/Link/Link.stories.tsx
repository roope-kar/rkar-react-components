import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Link, Paragraph } from 'src/components';

export default {
  title: 'Link',
  component: Link,
  parameters: {
    jest: ['Link.test.tsx'],
  },
} as Meta;

export const DefaultLink: React.FunctionComponent = () => <Link href={''}>Default</Link>;

export const AnotherLink: React.FunctionComponent = () => <Link href={''}>Another</Link>;

export const LinkInAParagraph: React.FunctionComponent = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit accumsan <Link href={'#'}>massa</Link>,
    ac finibus ligula tincidunt ut. Curabitur turpis enim, lacinia et tortor non, finibus suscipit magna. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit accumsan <Link href={'#'}>massa</Link>, ac finibus
    ligula tincidunt ut. Curabitur turpis enim, lacinia et tortor non, finibus suscipit magna.
  </Paragraph>
);

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Link } from 'src/components';

export default {
  title: 'Link',
  component: Link,
} as Meta;

export const DefaultLink: React.FunctionComponent = () => <Link href={''}>Default</Link>;

export const AnotherLink: React.FunctionComponent = () => <Link href={''}>Another</Link>;

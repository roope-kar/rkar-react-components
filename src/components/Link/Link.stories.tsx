import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Link } from 'src/components';

export default {
  title: 'Link',
  component: Link,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta;

export const DefaultLink: React.FunctionComponent = () => <Link>Default</Link>;

export const AnotherLink: React.FunctionComponent = () => <Link>Another</Link>;

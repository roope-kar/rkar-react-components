import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Badge } from 'src/components/Badge';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    jest: ['Badge.test.tsx'],
  },
} as Meta;

export const SimpleBadge: React.FunctionComponent = () => <Badge>Simple Badge</Badge>;

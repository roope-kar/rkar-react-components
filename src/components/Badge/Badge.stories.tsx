import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Badge } from 'src/components/Badge';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    jest: ['Badge.test.tsx'],
  },
} as Meta;

export const AllBadges: Story = () => (
  <div style={{ display: 'flex', flexFlow: 'nowrap row', justifyContent: 'space-around' }}>
    <Badge intent={'default'}>Small Badge</Badge>
    <Badge intent={'info'}>Small Badge</Badge>
    <Badge intent={'danger'}>Small Badge</Badge>
    <Badge intent={'warning'}>Small Badge</Badge>
    <Badge intent={'success'}>Small Badge</Badge>
  </div>
);

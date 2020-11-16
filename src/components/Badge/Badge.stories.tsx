import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Badge } from 'src/components/Badge';
import { Intent } from 'src/types';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    jest: ['Badge.test.tsx'],
  },
} as Meta;

const AllButtons: Story<{ intent: Intent }> = ({ intent }: { intent: Intent }) => (
  <div style={{ display: 'flex', flexFlow: 'nowrap row', justifyContent: 'space-around' }}>
    <Badge intent={intent}>Small Badge</Badge>
    <Badge intent={intent}>Small Badge</Badge>
    <Badge intent={intent}>Small Badge</Badge>
    <Badge intent={intent}>Small Badge</Badge>
    <Badge intent={intent}>Small Badge</Badge>
  </div>
);

export const AllButtonsTest = AllButtons.bind({});

AllButtonsTest.args = {
  intent: 'none',
};

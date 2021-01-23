import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Placeholder } from 'src/components/Placeholder';
import 'src/types';

export default {
  title: 'Placeholder',
  component: Placeholder,
  parameters: {
    jest: ['Placeholder.test.tsx'],
  },
} as Meta;

export const SimplePlaceholderBlocks: React.FunctionComponent = () => (
  <Placeholder>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Block />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Block />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Block />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Block />
    </div>
  </Placeholder>
);

export const SimplePlaceholderCircles: React.FunctionComponent = () => (
  <Placeholder>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Circle />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Circle />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Circle />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Placeholder.Circle />
    </div>
  </Placeholder>
);

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Breadcrumbs } from 'src/components';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    jest: ['Breadcrumbs.test.tsx'],
  },
} as Meta;

export const DefaultBreadcrumbs: React.FunctionComponent = () => (
  <Breadcrumbs>
    <Breadcrumbs.Item href={'/one'}>One</Breadcrumbs.Item>
    <Breadcrumbs.Item href={'/two'}>Two</Breadcrumbs.Item>
    <Breadcrumbs.Item href={'/three'}>Three</Breadcrumbs.Item>
  </Breadcrumbs>
);

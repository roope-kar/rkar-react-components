import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Tabs } from 'src/components/Tabs';
import 'src/types';

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    jest: ['Tabs.test.tsx'],
  },
} as Meta;

export const SimpleTabs: React.FunctionComponent = () => (
  <Tabs activeTab={'1'} onSetActiveTab={() => null}>
    <Tabs.Tab title={'1'}>one</Tabs.Tab>
    <Tabs.Tab title={'2'}>two</Tabs.Tab>
    <Tabs.Tab title={'3'}>three</Tabs.Tab>
  </Tabs>
);

export const ControlledTabs: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = React.useState('1');
  return (
    <Tabs activeTab={activeTab} onSetActiveTab={setActiveTab}>
      <Tabs.Tab title={'1'}>one</Tabs.Tab>
      <Tabs.Tab title={'2'}>two</Tabs.Tab>
      <Tabs.Tab title={'3'}>three</Tabs.Tab>
    </Tabs>
  );
};

import React from 'react';

export type TabsProps = {
  activeTab: string;
  onSetActiveTab: (title: string) => void;
  className?: string;
  children: Array<React.ReactElement<TabProps>>;
};

export type TabProps = {
  title: string;
  className?: string;
  children: React.ReactNode | React.ReactNodeArray;
}

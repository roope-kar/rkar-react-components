import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SelectSearch } from 'src/components/SelectSearch';
import 'src/types';

export default {
  title: 'SelectSearch',
  component: SelectSearch,
} as Meta;

export const DefaultSelectSearch: React.FunctionComponent = () => (
  <SelectSearch onSelect={() => null} onSearch={() => null} placeholder={'Search by name ...'}>
    <SelectSearch.Option value={1}>one</SelectSearch.Option>
    <SelectSearch.Option value={2}>two</SelectSearch.Option>
    <SelectSearch.Option value={3}>three</SelectSearch.Option>
  </SelectSearch>
);

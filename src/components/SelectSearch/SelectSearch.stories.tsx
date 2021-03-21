import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { SelectSearch } from 'src/components/SelectSearch';
import 'src/types';

export default {
  title: 'SelectSearch',
  component: SelectSearch,
  parameters: {
    jest: ['SelectSearch.test.tsx'],
  },
} as Meta;

export const DefaultSelectSearch: React.FunctionComponent = () => (
  <SelectSearch onChange={() => null} placeholder={'Search by name ...'}>
    <SelectSearch.Option value={1}>one</SelectSearch.Option>
    <SelectSearch.Option value={2}>two</SelectSearch.Option>
    <SelectSearch.Option value={3}>three</SelectSearch.Option>
  </SelectSearch>
);

export const ControlledSelectSearch: React.FunctionComponent = () => {
  const [options] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);
  const handleClick = (option: number) => window.console.log(option);
  return (
    <SelectSearch value={searchTerm} onChange={handleChange} placeholder={'Search by name ...'}>
      {options
        .filter((option: number) => option.toString().includes(searchTerm))
        .map((option: number) => (
          <SelectSearch.Option key={option} value={option} onClick={handleClick}>
            Option: {option}
          </SelectSearch.Option>
        ))}
    </SelectSearch>
  );
};

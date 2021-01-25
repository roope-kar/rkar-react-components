import React from 'react';
import { SelectSearch } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('SelectSearch', () => {
  afterEach(cleanup);

  test('renders all options', () => {
    const container = render(
      <SelectSearch onSelect={() => null} onSearch={() => null}>
        <SelectSearch.Option value={1}>one</SelectSearch.Option>
        <SelectSearch.Option value={2}>two</SelectSearch.Option>
        <SelectSearch.Option value={3}>three</SelectSearch.Option>
      </SelectSearch>,
    ).container as HTMLElement;

    expect(getByText(container, 'one').textContent).toStrictEqual('one');
    expect(getByText(container, 'two').textContent).toStrictEqual('two');
    expect(getByText(container, 'three').textContent).toStrictEqual('three');
  });

  test('calls onSearch callback when input changes', () => {
    const onSearch = jest.fn();
    const container = render(
      <SelectSearch onSelect={() => null} onSearch={onSearch}>
        <SelectSearch.Option value={1}>one</SelectSearch.Option>
        <SelectSearch.Option value={2}>two</SelectSearch.Option>
        <SelectSearch.Option value={3}>three</SelectSearch.Option>
      </SelectSearch>,
    ).container as HTMLElement;

    const inputElement = container.querySelector('input[type="text"]') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(onSearch).toBeCalledWith('test');
  });

  test('calls onSelect callback with the SelectSearch.Option value on click', () => {
    const onSelect = jest.fn();
    const placeholder = 'Search by name ...';
    const container = render(
      <SelectSearch onSelect={onSelect} onSearch={() => null} placeholder={placeholder}>
        <SelectSearch.Option value={1}>one</SelectSearch.Option>
        <SelectSearch.Option value={2}>two</SelectSearch.Option>
        <SelectSearch.Option value={3}>three</SelectSearch.Option>
      </SelectSearch>,
    ).container as HTMLElement;

    fireEvent.click(getByText(container, 'two'));

    expect(onSelect).toBeCalledWith(2);
  });

  test('should work without ThemeProvider', () => {});

  test('should read font from ThemeProvider', () => {});

  test('should read colors from ThemeProvider', () => {});
});

import React from 'react';
import { SelectSearch } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('SelectSearch', () => {
  afterEach(cleanup);

  test('renders all options', () => {
    const container = render(
      <SelectSearch onChange={() => null}>
        <SelectSearch.Option onClick={() => null} value={1}>
          one
        </SelectSearch.Option>
        <SelectSearch.Option onClick={() => null} value={2}>
          two
        </SelectSearch.Option>
        <SelectSearch.Option onClick={() => null} value={3}>
          three
        </SelectSearch.Option>
      </SelectSearch>,
    ).container as HTMLElement;

    expect(getByText(container, 'one').textContent).toStrictEqual('one');
    expect(getByText(container, 'two').textContent).toStrictEqual('two');
    expect(getByText(container, 'three').textContent).toStrictEqual('three');
  });

  test('calls onChange callback when input changes', () => {
    const onChange = jest.fn();
    const container = render(
      <SelectSearch onChange={onChange}>
        <SelectSearch.Option onClick={() => null} value={1}>
          one
        </SelectSearch.Option>
        <SelectSearch.Option onClick={() => null} value={2}>
          two
        </SelectSearch.Option>
        <SelectSearch.Option onClick={() => null} value={3}>
          three
        </SelectSearch.Option>
      </SelectSearch>,
    ).container as HTMLElement;

    const inputElement = container.querySelector('input[type="text"]') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(onChange).toBeCalled;
  });

  test('calls onClick callback with the SelectSearch.Option value on click', () => {
    const onClick = jest.fn();
    const placeholder = 'Search by name ...';
    const container = render(
      <SelectSearch onChange={() => null} placeholder={placeholder}>
        <SelectSearch.Option onClick={onClick} value={1}>
          one
        </SelectSearch.Option>
        <SelectSearch.Option onClick={onClick} value={2}>
          two
        </SelectSearch.Option>
        <SelectSearch.Option onClick={onClick} value={3}>
          three
        </SelectSearch.Option>
      </SelectSearch>,
    ).container as HTMLElement;

    fireEvent.click(getByText(container, 'two'));

    expect(onClick).toBeCalledWith(2);
  });
});

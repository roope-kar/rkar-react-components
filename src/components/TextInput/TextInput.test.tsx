import React from 'react';
import { TextInput } from 'src/components';
import { render, cleanup, getByPlaceholderText, fireEvent } from '@testing-library/react';

describe('TextInput', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<TextInput value={'123'} placeholder={'test'} readOnly />).container;

    expect(getByPlaceholderText(container, 'test').getAttribute('value')).toStrictEqual('123');
  });

  test('should call onChange callback on change', () => {
    const onChange = jest.fn();

    const container: HTMLElement = render(<TextInput value={'123'} placeholder={'test'} onChange={onChange} />)
      .container;

    fireEvent.change(getByPlaceholderText(container, 'test'), { value: 'lol' });

    expect(onChange).toBeCalled;
  });
});

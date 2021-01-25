import React from 'react';
import { TextInput } from 'src/components';
import { render, cleanup, getByPlaceholderText } from '@testing-library/react';

describe('TextInput', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<TextInput value={'123'} placeholder={'test'} readOnly />).container as HTMLElement;

    expect(getByPlaceholderText(container, 'test').getAttribute('value')).toStrictEqual('123');
  });

});

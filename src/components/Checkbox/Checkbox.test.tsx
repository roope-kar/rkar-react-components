import React from 'react';
import { Checkbox } from 'src/components';
import { render, cleanup, fireEvent } from '@testing-library/react';

describe('TextInput', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<Checkbox value={'false'} />).container;

    const checkboxElement = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(checkboxElement).toBeDefined;
  });

  test('should call onChange callback on change', () => {
    const onChange = jest.fn();

    const container: HTMLElement = render(<Checkbox value={'123'} onChange={onChange} />).container;

    const checkboxElement = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

    fireEvent.change(checkboxElement, { value: 'true' });

    expect(onChange).toBeCalled;
  });
});

import React from 'react';
import { Checkbox } from 'src/components';
import { render, cleanup, fireEvent } from '@testing-library/react';

describe('Checkbox', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<Checkbox value={'false'} />).container as HTMLElement;

    const checkboxElement = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(checkboxElement).toBeDefined;
  });

  test('should call onChange callback on change', () => {
    const onChange = jest.fn();

    const container = render(<Checkbox value={'123'} onChange={onChange} />).container as HTMLElement;

    const checkboxElement = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

    fireEvent.change(checkboxElement, { value: 'true' });

    expect(onChange).toBeCalled;
  });
});

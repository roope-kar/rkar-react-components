import React from 'react';
import { RadioButton } from 'src/components';
import { render, cleanup, fireEvent } from '@testing-library/react';

describe('RadioButton', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(<RadioButton value={'false'} />).container;

    const radioButtonElement = container.querySelector('input[type="radio"]') as HTMLInputElement;

    expect(radioButtonElement).toBeDefined;
  });

  test('should call onChange callback on change', () => {
    const onChange = jest.fn();

    const container: HTMLElement = render(<RadioButton value={'123'} onChange={onChange} />).container;

    const radioButtonElement = container.querySelector('input[type="radio"]') as HTMLInputElement;

    fireEvent.change(radioButtonElement, { value: 'true' });

    expect(onChange).toBeCalled;
  });
});

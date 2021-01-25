import React from 'react';
import { Dialog } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('Dialog', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(
      <Dialog title={'MyDialog'} onClose={() => null}>
        <Dialog.Body>body</Dialog.Body>
        <Dialog.Footer>footer</Dialog.Footer>
      </Dialog>,
    ).container as HTMLElement;

    expect(getByText(container, 'MyDialog')).toBeTruthy;
    expect(getByText(container, 'body')).toBeTruthy;
    expect(getByText(container, 'footer')).toBeTruthy;
  });

  test('should call onClose callback on close icon click', () => {
    const onClose = jest.fn();

    render(
      <Dialog title={'MyDialog'} onClose={onClose}>
        <Dialog.Body>body</Dialog.Body>
        <Dialog.Footer>footer</Dialog.Footer>
      </Dialog>,
    ).container as HTMLElement;

    const closeButtonElement = document.querySelector('button') as HTMLElement;

    fireEvent.click(closeButtonElement);

    expect(onClose).toHaveBeenCalled;
  });
});

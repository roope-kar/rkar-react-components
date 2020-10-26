import React from 'react';
import { Dialog } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('Dialog', () => {

  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(
      <Dialog title={'MyDialog'} onClose={() => null}>
        <Dialog.Body>body</Dialog.Body>
        <Dialog.Footer>footer</Dialog.Footer>
      </Dialog>,
    ).container;

    expect(getByText(container, 'MyDialog')).toBeTruthy;
    expect(getByText(container, 'body')).toBeTruthy;
    expect(getByText(container, 'footer')).toBeTruthy;
  });

  test('should call onClose callback on close icon click', () => {
    const onClose = jest.fn();

    const container: HTMLElement = render(
      <Dialog title={'MyDialog'} onClose={onClose}>
        <Dialog.Body>body</Dialog.Body>
        <Dialog.Footer>footer</Dialog.Footer>
      </Dialog>,
    ).container;

    fireEvent.click(getByText(container, 'x'));

    expect(onClose).toHaveBeenCalled;
  });

});

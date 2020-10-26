import React from 'react';
import { Portal } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Button', () => {

  const target = document.createElement('div');

  beforeEach(() => {
    document.body.appendChild(target);
  });
  
  afterEach(() => {
    document.body.removeChild(target);
    cleanup();
  });

  test('renders', () => {

    const baseElement: HTMLElement = render(
      <Portal to={target}>MyPortal</Portal>
    ).baseElement;

    expect(getByText(baseElement, 'MyPortal')).toBeTruthy;

  });

});

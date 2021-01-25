import React from 'react';
import { Portal } from 'src/components';
import { render, cleanup } from '@testing-library/react';

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
    render(
      <Portal to={target}>
        <div>MyPortal</div>
      </Portal>,
    ).baseElement;

    expect(document.body.querySelectorAll('div')).toBeTruthy;
  });
});

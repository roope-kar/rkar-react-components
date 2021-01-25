import React from 'react';
import { Positioner } from 'src/components/Positioner';
import { render, cleanup } from '@testing-library/react';

describe('Positioner', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Positioner content={() => <div>content</div>}>Positioner Div</Positioner>);
    expect(window.document.body.querySelectorAll('div')).toBeTruthy;
  });
});

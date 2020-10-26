import React from 'react';
import { Positioner } from 'src/components/Positioner';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Positioner', () => {

  afterEach(cleanup);

  test('renders', () => {

    const baseElement: HTMLElement = render(
      <Positioner content={() => <div>content</div>}>Positioner Div</Positioner>
    ).baseElement;

    expect(getByText(baseElement, 'Positioner Div')).toBeTruthy;

  });

});

import React from 'react';
import { TextArea } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('TextArea', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(<TextArea value={'This is a placeholder text'} readOnly />).container as HTMLElement;
    expect(container).toBeDefined;
  });
});

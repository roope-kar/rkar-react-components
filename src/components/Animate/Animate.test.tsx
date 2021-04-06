import React from 'react';
import { Animate } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Animate', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Animate>{(time: number) => <span>{time}</span>}</Animate>);
  });
});

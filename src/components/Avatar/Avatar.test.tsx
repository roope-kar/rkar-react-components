import React from 'react';
import { Avatar } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Avatar', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Avatar src={''} size={'medium'} appearance={'primary'} />).container as HTMLElement;
  });
});

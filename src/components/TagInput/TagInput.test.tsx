import React from 'react';
import { TagInput } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('TagInput', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<TagInput value={'123'} />);
  });
});

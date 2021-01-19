import React from 'react';
import { FileInput } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('FileInput', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<FileInput label={'Select file'} />);
  });
});

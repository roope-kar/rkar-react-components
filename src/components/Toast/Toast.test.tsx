import React from 'react';
import { Toast } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Toast', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Toast>Test</Toast>);
  });
});

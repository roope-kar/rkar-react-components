import React from 'react';
import { DynamicForm } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('DynamicForm', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<DynamicForm />);
  });
});

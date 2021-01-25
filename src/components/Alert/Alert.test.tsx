import React from 'react';
import { Alert } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Alert', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(
      <Alert appearance={'primary'} intent={'none'}>
        <Alert.Title>Title</Alert.Title>
        <Alert.Description>Description</Alert.Description>
      </Alert>,
    );
  });
});

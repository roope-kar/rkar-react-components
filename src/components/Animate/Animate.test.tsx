import React from 'react';
import { Animate, Text } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Animate', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(
      <Animate inRule={''} outRule={''}>
        <Text>Hello World</Text>
      </Animate>,
    );
  });
});

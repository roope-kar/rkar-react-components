import React from 'react';
import { RadioButtonCard } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('RadioButtonCard', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(
      <RadioButtonCard>
        <RadioButtonCard.Title>Title</RadioButtonCard.Title>
        <RadioButtonCard.Description>Description</RadioButtonCard.Description>
      </RadioButtonCard>,
    );
  });
});

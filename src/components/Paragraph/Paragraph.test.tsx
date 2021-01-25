import React from 'react';
import { Paragraph } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Paragraph', () => {
  afterEach(cleanup);

  it('renders', () => {
    const container = render(<Paragraph size={'medium'}>Paragraph</Paragraph>).container as HTMLElement;

    expect(getByText(container, 'Paragraph').textContent).toStrictEqual('Paragraph');
  });
});

import React from 'react';
import { Form, TextInput } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Form', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(
      <Form>
        <Form.Field>
          <Form.Label>Default</Form.Label>
          <Form.Input>
            <TextInput />
          </Form.Input>
        </Form.Field>
      </Form>,
    ).container as HTMLElement;

    expect(getByText(container, 'Default').textContent).toStrictEqual('Default');
  });
});

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Form, Button, TextInput } from 'src/components';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    jest: ['Form.test.tsx'],
  },
} as Meta;

export const SimpleForm: React.FunctionComponent = () => {
  return (
    <Form>
      <Form.Field>
        <TextInput />
      </Form.Field>
      <Form.Field>
        <TextInput />
      </Form.Field>
      <Form.Field>
        <Button>Submit</Button>
      </Form.Field>
    </Form>
  );
};

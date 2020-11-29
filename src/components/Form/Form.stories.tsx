import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Form, Button } from 'src/components';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    jest: ['Form.test.tsx'],
  },
} as Meta;

export const SimpleForm: React.FunctionComponent = () => {
    
    return (
        <Form onSubmit={}>
    <Form.Field>
        <Form.Label error={}>Email</Form.Label>
        <Form.Input>
            <EmailInput error={} />
        </Form.Input>
    </Form.Field>
    <Form.Field>
        <Form.Label error={}>Password</Form.Label>
        <Form.Input>
            <PasswordInput error={} />
        </Form.Input>
    </Form.Field>
    <Button></Button>
  </Form>
    )
}

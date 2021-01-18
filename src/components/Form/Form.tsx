import React from 'react';
import styled from 'styled-components';
import type {
  FormProps,
  FormFieldProps,
  FormLabelProps,
  FormInputProps,
  FormGroupProps,
} from 'src/components/Form/Form.d';
import type { GroupComponent } from 'src/types';

const FormContainer = styled.form``;

const Form: GroupComponent<FormProps> = (props) => {
  return <FormContainer {...props} />;
};

const FormField = styled.div<FormFieldProps>`
  margin-bottom: 8px;
`;

Form.Field = FormField;

const FormLabel = styled.label<FormLabelProps>``;

Form.Label = FormLabel;

const FormInput = styled.div<FormInputProps>``;

Form.Input = FormInput;

const FormGroup = styled.fieldset<FormGroupProps>``;

Form.Group = FormGroup;

export default Form;

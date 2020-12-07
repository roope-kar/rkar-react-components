import React from 'react';
import styled from 'styled-components';
import type { FormProps, FormFieldProps, FormLabelProps, FormInputProps } from 'src/components/Form/Form.d';
import type { GroupComponent } from 'src/types';

const FormContainer = styled.form``;

const Form: GroupComponent<FormProps> = (props) => {
  return <FormContainer {...props} />;
};

const FormField = styled.div<FormFieldProps>``;

Form.Field = FormField;

const FormLabel = styled.label<FormLabelProps>``;

Form.Label = FormLabel;

const FormInput = styled.div<FormInputProps>``;

Form.Input = FormInput;

export default Form;

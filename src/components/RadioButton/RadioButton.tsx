import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from 'src/components/RadioButton/RadioButton.d';
import theme from 'src/theme';

const Container = styled.span`'
  cursor: pointer;
`;

Container.defaultProps = {
  theme,
};

const Content = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: transparent;
`;

Content.defaultProps = {
  theme,
};

const Input = styled.input<RadioButtonProps>`
  display: none;
  &:checked + label {
    background: rgba(255, 255, 255, 0.1);
  }
`;

Input.defaultProps = {
  theme,
};

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({ checked, id, name, ...rest }: RadioButtonProps) => {
  const identifier = id || `radiobutton-${Math.round(Math.random() * 1000)})`;
  return (
    <Container role={'radio'} aria-checked={checked}>
      <Input id={identifier} name={name} type={'radio'} checked={checked} {...rest} />
      <Content id={identifier} htmlFor={identifier} />
    </Container>
  );
};

export default RadioButton;

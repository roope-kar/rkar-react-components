import React from 'react';
import styled, { keyframes } from 'styled-components';
import type { RadioButtonProps } from 'src/components/RadioButton/RadioButton.d';
import theme from 'src/theme';

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.theme.background.default};
`;

Container.defaultProps = {
  theme,
};

const Content = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0;
`;

Content.defaultProps = {
  theme,
};

const Input = styled.input<RadioButtonProps>`
  opacity: 0;
  width: 0px;
  height: 0px;
  margin: 0;
  &:checked + label::after {
    animation: ${appear} 0.1s linear;
    background: ${(props) => props.theme.background.default};
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
`;

Input.defaultProps = {
  theme,
};

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({ checked, id, name, ...rest }: RadioButtonProps) => {
  const identifier = id || `radiobutton-${Math.round(Math.random() * 1000)})`;
  return (
    <Container>
      <Input id={identifier} name={name} type={'radio'} checked={checked} {...rest} />
      <Content id={identifier} htmlFor={identifier} />
    </Container>
  );
};

export default RadioButton;

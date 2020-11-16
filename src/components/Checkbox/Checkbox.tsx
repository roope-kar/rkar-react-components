import React from 'react';
import styled from 'styled-components';
import type { CheckboxProps } from 'src/components/Checkbox/Checkbox.d';
import theme from 'src/theme';

const Container = styled.span``;

Container.defaultProps = {
  theme,
};

const Content = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: transparent;
`;

Content.defaultProps = {
  theme,
};

const Input = styled.input<CheckboxProps>`
  display: none;
  &:checked + label {
    background: rgba(0, 0, 0, 0.1);
  }
`;

Input.defaultProps = {
  theme,
};

const Checkbox: React.FunctionComponent<CheckboxProps> = ({ checked, id, name, ...rest }: CheckboxProps) => {
  const identifier = id || name || `checkbox-${Math.round(Math.random() * 1000)})`;
  return (
    <Container role={'checkbox'} aria-checked={checked}>
      <Input id={identifier} name={name} type={'checkbox'} checked={checked} {...rest} />
      <Content id={identifier} htmlFor={identifier} />
    </Container>
  );
};

export default Checkbox;

import React from 'react';
import styled from 'styled-components';
import type { CheckboxProps } from 'src/components/Checkbox/Checkbox.d';
import theme from 'src/theme';

const Container = styled.span`
  cursor: pointer;
`;

const Content = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  background: transparent;
`;

Content.defaultProps = {
  theme,
};

const Input = styled.input<CheckboxProps>`
  display: none;
  &:checked + label {
    background: rgba(255, 255, 255, 0.1);
    &::after {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.9);
      content: '✓';
    }
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

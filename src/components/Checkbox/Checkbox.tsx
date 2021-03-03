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
  border: 1px solid ${(props) => props.theme.background.default};
  border-radius: 3px;
  background: transparent;
`;

Content.defaultProps = {
  theme,
};

const Input = styled.input<CheckboxProps>`
  display: default;
  &:checked + label {
    background: ${(props) => props.theme.background.default};
    &::after {
      font-size: 18px;
      color: ${(props) => props.theme?.color.default};
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

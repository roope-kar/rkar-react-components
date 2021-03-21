import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import type { SwitchProps } from 'src/components/Switch/Switch.d';
import theme from 'src/theme';

const Container = styled.label<SwitchProps>`
  display: inline-flex;
  align-items: center;
  justify-content: ${(props) => (props.value === 'true' ? 'flex-end' : 'flex-start')};
  width: 32px;
  height: 16px;
  background: ${(props) =>
    props.value === 'true' ? lighten(0.1, props.theme.background.success) : props.theme.background.default};
  border-radius: 9999px;
  cursor: pointer;
`;

Container.defaultProps = {
  theme,
};

const Input = styled.input<SwitchProps>`
  opacity: 0;
  width: 0px;
  height: 0px;
  margin: 0;
`;

const Dot = styled.div<SwitchProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.value === 'true' ? props.theme.background.success : props.theme.background.default)};
`;

Dot.defaultProps = {
  theme,
};

const Switch: React.FunctionComponent<SwitchProps> = ({ value = 'false', onChange }: SwitchProps) => {
  return (
    <Container value={value}>
      <Input type={'checkbox'} value={value} onChange={onChange} />
      <Dot value={value} />
    </Container>
  );
};

export default Switch;

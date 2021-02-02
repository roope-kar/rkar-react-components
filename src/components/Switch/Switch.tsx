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
  background: ${(props) => (props.value === 'true' ? lighten(0.1, props.theme.color.success) : 'rgba(0, 0, 0, 0.1)')};
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
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => (props.value === 'true' ? props.theme.color.success : 'rgba(255, 255, 255, 0.1)')};
`;

Dot.defaultProps = {
  theme,
};

const Switch: React.FunctionComponent<SwitchProps> = (props: SwitchProps) => {
  return (
    <Container value={props.value}>
      <Input type={'checkbox'} value={props.value} onChange={props.onChange} />
      <Dot value={props.value} />
    </Container>
  );
};

export default Switch;

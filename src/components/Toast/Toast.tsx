import React from 'react';
import styled from 'styled-components';
import type { ToastProps } from 'src/components/Toast/Toast.d';
import theme from 'src/theme';

const Container = styled.div<ToastProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  font-family: ${(props) => props.theme.font.primary};
  box-shadow: 1px 1px 1px ${(props) => props.theme.background.default};
  background: ${(props) => props.theme.background.default};
  border-left: 8px solid ${(props) => props.theme.color[props.intent || 'default']};
  color: ${(props) => props.theme.color.default};
`;

Container.defaultProps = {
  theme,
  intent: 'default',
};

const Close = styled.button`
  color: ${(props) => props.theme.color.default};
  font-family: ${(props) => props.theme.font.primary};
  padding: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 20px;
  background: transparent;
  &:focus {
    outline: ${(props) => props.theme.background.default};
    background: ${(props) => props.theme.background.default};
  }
`;

Close.defaultProps = {
  theme,
};

const Toast: React.FunctionComponent<ToastProps> = ({ children, onClose, ...props }: ToastProps) => {
  return (
    <Container {...props}>
      {children}
      <Close onClick={onClose}>&times;</Close>
    </Container>
  );
};

export default Toast;

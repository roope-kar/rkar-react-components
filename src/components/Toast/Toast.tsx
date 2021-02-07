import React from 'react';
import styled from 'styled-components';
import type { ToastProps } from 'src/components/Toast/Toast.d';

const Container = styled.div``;

const Toast: React.FunctionComponent<ToastProps> = ({ children }: ToastProps) => {
  return <Container>{children}</Container>;
};

export default Toast;

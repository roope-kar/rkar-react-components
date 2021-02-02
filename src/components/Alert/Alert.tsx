import React from 'react';
import styled from 'styled-components';
import theme from 'src/theme';
import type { AlertProps } from 'src/components/Alert/Alert.d';
import { GroupComponent } from 'src/types';

const Container = styled.div<AlertProps>`
  padding: 8px 16px;
  font-family: ${(props) => props.theme.font.primary};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-left: 8px solid ${(props) => props.theme.color[props.intent]};
  color: rgba(255, 255, 255, 0.9);
`;

Container.defaultProps = {
  theme,
};

const Title = styled.div<AlertProps>`
  font-weight: bold;
  margin-bottom: 4px;
`;

Title.defaultProps = {
  theme,
};

const Description = styled.div<AlertProps>`
  line-height: 24px;
`;

Description.defaultProps = {
  theme,
};

const Alert: GroupComponent<AlertProps> = (props: AlertProps) => {
  return <Container {...props} />;
};

Alert.defaultProps = {
  intent: 'none',
  appearance: 'primary',
  theme,
};

Alert.Title = Title;

Alert.Description = Description;

export default Alert;

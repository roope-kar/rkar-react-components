import React from 'react';
import styled from 'styled-components';
import theme from 'src/theme';
import type { AlertProps } from 'src/components/Alert/Alert.d';

const Container = styled.div<AlertProps>`
  padding: 8px 16px;
  font-family: ${(props) => props.theme.font.primary};
  box-shadow: 1px 1px 1px ${(props) => props.theme.background.default};
  background: ${(props) => props.theme.background.default};
  border-left: 8px solid ${(props) => props.theme.color[props.intent]};
  color: ${(props) => props.theme.color.default};
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

const Alert: React.FunctionComponent<AlertProps> & { 
  Title: React.FunctionComponent<AlertProps>, 
  Description: React.FunctionComponent<AlertProps> 
} = (props: AlertProps) => {
  return <Container {...props} />;
};

Alert.defaultProps = {
  intent: 'default',
  appearance: 'primary',
  theme,
};

Alert.Title = Title;

Alert.Description = Description;

export default Alert;

import React from 'react';
import styled from 'styled-components';
import type { ProgressBarProps } from 'src/components/ProgressBar/ProgressBar.d';
import theme from 'src/theme';

const Container = styled.div`
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  position: relative;
  min-width: 200px;
  height: 24px;
  border-radius: 3px;
`;

Container.defaultProps = {
  theme,
};

const Label = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
`;

const Progress = styled.div<ProgressBarProps>`
  background: ${(props) => props.theme.background.default};
  height: 100%;
  width: ${(props) => props.value || 0}%;
`;

Progress.defaultProps = {
  theme,
};

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ value }: ProgressBarProps) => {
  return (
    <Container>
      <Label>{value}%</Label>
      <Progress value={value} />
    </Container>
  );
};

export default ProgressBar;

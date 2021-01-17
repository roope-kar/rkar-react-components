import React from 'react';
import styled from 'styled-components';
import type { ProgressBarProps } from 'src/components/ProgressBar/ProgressBar.d';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  min-width: 200px;
  height: 24px;
  border-radius: 3px;
`;

const Label = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
`;

const Progress = styled.div<ProgressBarProps>`
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: ${(props) => props.value || 0}%;
`;

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ value }: ProgressBarProps) => {
  return (
    <Container>
      <Label>{value}%</Label>
      <Progress value={value} />
    </Container>
  );
};

export default ProgressBar;

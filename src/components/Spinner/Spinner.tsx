import React from 'react';
import styled, { keyframes } from 'styled-components';
import type { SpinnerProps } from 'src/components/Spinner/Spinner.d';

const bounceAnimation = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const Container = styled.div`
  display: inline-block;
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${bounceAnimation} 1.4s infinite ease-in-out both;
  animation: ${bounceAnimation} 1.4s infinite ease-in-out both;
`;

const Dot1 = styled(Dot)`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
  margin-right: 5px;
`;

const Dot2 = styled(Dot)`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  margin-right: 5px;
`;

const Dot3 = styled(Dot)``;

const Spinner: React.FunctionComponent<SpinnerProps> = () => (
  <Container>
    <Dot1 />
    <Dot2 />
    <Dot3 />
  </Container>
);

export default Spinner;

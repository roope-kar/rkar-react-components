import React from 'react';
import styled, { keyframes } from 'styled-components';
import type { GroupComponent, ShirtSize } from 'src/types';
import type { PlaceholderProps } from 'src/components/Placeholder/Placeholder.d';

const blink = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.8; }
  100% { opacity: 0.1; }
`;

const getSize = (size: ShirtSize) => {
  switch (size) {
    case 'small':
      return '24px';
    case 'medium':
      return '28px';
    case 'large':
      return '32px';
    default:
      return '28px';
  }
};

const Container = styled.div<PlaceholderProps>``;

const Placeholder: GroupComponent<PlaceholderProps> = ({ children }: PlaceholderProps) => {
  return <Container>{children}</Container>;
};

const PlaceholderBlock = styled.div<PlaceholderProps>`
  background: rgba(255, 255, 255, 0.1);
  animation: ${blink} 1s linear infinite;
  width: 100%;
  height: ${(props) => getSize(props.size || 'medium')};
  border-radius: 3px;
`;

PlaceholderBlock.defaultProps = {
  size: 'medium',
};

Placeholder.Block = PlaceholderBlock;

const PlaceholderCircle = styled.div<PlaceholderProps>`
  background: rgba(255, 255, 255, 0.1);
  animation: ${blink} 1s linear infinite;
  width: ${(props) => getSize(props.size || 'medium')};
  height: ${(props) => getSize(props.size || 'medium')};
  border-radius: 50%;
`;

PlaceholderCircle.defaultProps = {
  size: 'medium',
};

Placeholder.Circle = PlaceholderCircle;

export default Placeholder;

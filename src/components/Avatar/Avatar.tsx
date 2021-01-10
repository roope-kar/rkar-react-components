import React from 'react';
import styled from 'styled-components';
import type { ShirtSize, Appearance } from 'src/types';
import type { AvatarProps } from 'src/components/Avatar/Avatar.d';

const Container = styled.div<{ appearance: Appearance }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => (props.appearance === 'primary' ? '3px' : '50%')};
`;

const Image = styled.img<{ appearance: Appearance }>`
  border-radius: ${(props) => (props.appearance === 'primary' ? '3px' : '50%')};
`;

const getSize = (size: ShirtSize) => {
  switch (size) {
    case 'small':
      return '20px';
    case 'medium':
      return '26px';
    case 'large':
      return '32px';
    default:
      return '26px';
  }
};

const Avatar: React.FunctionComponent<AvatarProps> = ({ src, size, appearance }: AvatarProps) => {
  const widthAndHeight = getSize(size);
  return (
    <Container appearance={appearance}>
      <Image appearance={appearance} src={src} width={widthAndHeight} height={widthAndHeight} />
    </Container>
  );
};

Avatar.defaultProps = {
  src: '',
  size: 'medium',
};

export default Avatar;

import React from 'react';
import styled from 'styled-components';
import type { ShirtSize } from 'src/types';
import type { AvatarProps } from 'src/components/Avatar/Avatar.d';

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img``;

const getSize = (size: ShirtSize) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'medium':
      return '16px';
    case 'large':
      return '22px';
    default:
      return '16px';
  }
};

const Avatar: React.FunctionComponent<AvatarProps> = ({ src, size }: AvatarProps) => {
  const widthAndHeight = getSize(size);
  return (
    <Container>
      <Image src={src} width={widthAndHeight} height={widthAndHeight} />
    </Container>
  );
};

Avatar.defaultProps = {
  src: '',
  size: 'medium',
};

export default Avatar;

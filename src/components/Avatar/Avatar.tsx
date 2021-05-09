import React from 'react';
import styled from 'styled-components';
import type { Size, Appearance } from 'src/types';
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

const getSize = (size: Size) => {
  switch (size) {
    case 'small':
      return '24px';
    case 'medium':
      return '32px';
    case 'large':
      return '40px';
    default:
      return '32px';
  }
};

const Avatar: React.FunctionComponent<AvatarProps> = ({
  src,
  size = 'medium',
  appearance = 'primary',
}: AvatarProps) => {
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
  appearance: 'primary',
};

export default Avatar;

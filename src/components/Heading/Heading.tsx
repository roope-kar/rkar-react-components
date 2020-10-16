import styled from 'styled-components';
import type { HeadingProps } from 'src/components/Heading/Heading.d';
import { ShirtSize } from 'src/types';
import theme from 'src/theme';

const getSizeStyles = (size?: ShirtSize) => {
  if (size === 'large') {
    return `
        font-size: 45px;
        line-height: 48px;
    `;
  } else if (size === 'medium') {
    return `
            font-size: 45px;
            line-height: 48px;
        `;
  } else {
    return `
            font-size: 45px;
            line-height: 48px;
        `;
  }
};

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.font.primary};
  font-weight: normal;

  // Size
  ${(props) => getSizeStyles(props.size)}
`;

Heading.defaultProps = {
  theme,
};

export default Heading;

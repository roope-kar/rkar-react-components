import styled from 'styled-components';
import type { HeadingProps } from 'src/components/Heading/Heading.d';
import { Size } from 'src/types';
import theme from 'src/theme';

const getSizeStyles = (size?: Size) => {
  if (size === 'large') {
    return `
        font-size: 48px;
        line-height: 48px;
    `;
  } else if (size === 'medium') {
    return `
            font-size: 48px;
            line-height: 48px;
        `;
  } else {
    return `
            font-size: 48px;
            line-height: 48px;
        `;
  }
};

const Heading = styled.h1<HeadingProps>`
  color: ${(props) => props.theme.color.default};
  font-family: ${(props) => props.theme.font.primary};
  font-weight: normal;
  margin: 0;
  ${(props) => getSizeStyles(props.size)}
`;

Heading.defaultProps = {
  theme,
};

export default Heading;

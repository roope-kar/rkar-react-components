import styled from 'styled-components';
import type { TextProps } from 'src/components/Text/Text.d';
import type { Size } from 'src/types';
import theme from 'src/theme';

const getSize = (size?: Size): string => {
  if (size === 'large') {
    return `font-size: 14px`;
  } else {
    return `font-size: 12px`;
  }
};

const Text = styled.span<TextProps>`
  color: ${(props) => props.theme.color.default};
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => getSize(props.size)}
`;

Text.defaultProps = {
  theme,
  size: 'medium',
  title: '',
};

export default Text;

import styled from 'styled-components';
import type { TextProps } from 'src/components/Text/Text.d';
import type { ShirtSize } from 'src/types';
import theme from 'src/theme';

const getSize = (size?: ShirtSize): string => {
  if (size === 'large') {
    return `font-size: 14px`;
  } else {
    return `font-size: 12px`;
  }
};

const getTooltip = (title: string): string => {
  return `
  a[title]:hover:after {
    content: ${title};
    position: absolute;
    font-family: Roboto;
    display: inline-block;
    line-height: 24px;
    border-radius: 3px;
    padding: 0px 8px;
    font-size: 12px;
    background: black;
    color: white;
    &::selection {
      background: transparent;
    }
  }`;
};

const Text = styled.span<TextProps>`
  color: rgba(255, 255, 255, 0.9);
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => getSize(props.size)}
  ${(props) => (props.title ? getTooltip(props.title) : '')}
`;

Text.defaultProps = {
  theme,
  size: 'medium',
  title: '',
};

export default Text;

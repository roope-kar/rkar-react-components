import styled from 'styled-components';
import type { TextProps } from 'src/components/Text/Text.d';
import theme from 'src/theme';

const Text = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.primary};
`;

Text.defaultProps = {
  theme,
};

export default Text;

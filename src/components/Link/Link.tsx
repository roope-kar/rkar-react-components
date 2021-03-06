import styled from 'styled-components';
import type { LinkProps } from 'src/components/Link/Link.d';
import theme from 'src/theme';

const Link = styled.a.attrs({ role: 'link' })<LinkProps>`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.info};
`;

Link.defaultProps = {
  theme,
};

export default Link;

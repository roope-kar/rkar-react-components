import styled from 'styled-components';
import type { CodeProps } from 'src/components/Code/Code.d';
import theme from 'src/theme';

const Code = styled.code<CodeProps>`
  display: block;
  font-family: ${(props) => props.theme.font.code};
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  border-radius: 3px;
  padding: 16px 24px;
`;

Code.defaultProps = {
  theme,
};

export default Code;

import styled from 'styled-components';
import type { CodeProps } from 'src/components/Code/Code.d';
import theme from 'src/theme';

const Code = styled.code<CodeProps>`
  display: block;
  font-family: ${(props) => props.theme.font.secondary};
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  padding: 15px 20px;
`;

Code.defaultProps = {
  theme,
};

export default Code;

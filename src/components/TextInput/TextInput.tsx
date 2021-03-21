import styled from 'styled-components';
import theme from 'src/theme';
import type { TextInputProps } from 'src/components/TextInput/TextInput.d';

const TextInput = styled.input.attrs({ type: 'text' })<TextInputProps>`
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  font-family: ${(props) => props.theme.font.primary};
  border-radius: 3px;
  padding: 0px 8px;
  border: none;
  line-height: 32px;
  &:focus {
    outline: none;
  }
`;

TextInput.defaultProps = {
  theme,
};

export default TextInput;

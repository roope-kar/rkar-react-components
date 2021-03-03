import styled from 'styled-components';
import theme from 'src/theme';
import type { TextInputProps } from 'src/components/TextInput/TextInput.d';

const TextInput = styled.input.attrs({ type: 'text' })<TextInputProps>`
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  border-radius: 3px;
  padding: 0px 8px;
  border: default;
  line-height: 32px;
  &:focus {
    outline: default;
  }
`;

TextInput.defaultProps = {
  theme,
};

export default TextInput;

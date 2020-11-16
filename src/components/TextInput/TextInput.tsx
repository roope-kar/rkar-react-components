import styled from 'styled-components';
import theme from 'src/theme';
import type { TextInputProps } from 'src/components/TextInput/TextInput.d';

const TextInput = styled.input.attrs({ type: 'text' })<TextInputProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0px 10px;
  line-height: 32px;
  &:focus {
    outline: none;
  }
`;

TextInput.defaultProps = {
  theme,
};

export default TextInput;

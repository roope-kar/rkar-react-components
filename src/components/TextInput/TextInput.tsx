import styled from 'styled-components';
import theme from 'src/theme';
import type { TextInputProps } from 'src/components/TextInput/TextInput.d';

const TextInput = styled.input.attrs({ type: 'text' })<TextInputProps>`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  padding: 0px 10px;
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

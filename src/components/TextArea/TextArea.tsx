import styled from 'styled-components';
import type { TextAreaProps } from 'src/components/TextArea/TextArea.d';
import theme from 'src/theme';

const TextArea = styled.textarea<TextAreaProps>`
  color: ${(props) => props.theme.color.default};
  background: ${(props) => props.theme.background.default};
  border: none;
  border-radius: 3px;
  padding: 8px;
  box-sizing: border-box;
  resize: ${(props) => (props.resize ? 'default' : 'none')};
`;

TextArea.defaultProps = {
  resize: false,
  theme,
};

export default TextArea;

import styled from 'styled-components';
import type { TextAreaProps } from 'src/components/TextArea/TextArea.d';

const TextArea = styled.textarea<TextAreaProps>`
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 3px;
  padding: 8px;
  box-sizing: border-box;
  resize: ${(props) => (props.resize ? 'default' : 'none')};
`;

TextArea.defaultProps = {
  resize: false,
};

export default TextArea;

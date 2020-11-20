import styled from 'styled-components';
import { ShirtSize } from 'src/types';
import type { ParagraphProps } from 'src/components/Paragraph/Paragraph.d';
import theme from 'src/theme';

const getSizeStyles = (size?: ShirtSize) => {
  if (size === 'large') {
    return `
            font-size: 16px;
            line-height: 24px;
        `;
  } else if (size === 'medium') {
    return `
            font-size: 16px;
            line-height: 24px;
        `;
  } else {
    return `
            font-size: 16px;
            line-height: 24px;
        `;
  }
};

const Paragraph = styled.p<ParagraphProps>`
  color: rgba(255, 255, 255, 0.9);
  font-family: ${(props) => props.theme.font.secondary};
  ${(props) => getSizeStyles(props.size)}
`;

Paragraph.defaultProps = {
  theme,
};

export default Paragraph;

import styled from 'styled-components';
import { ShirtSize } from 'src/types';
import type { ParagraphProps } from 'src/components/Paragraph/Paragraph.d';

const size = (size?: ShirtSize) => {
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
  font-family: 'Open Sans';

  // Size
  ${(props) => size(props.size)}
`;

export default Paragraph;

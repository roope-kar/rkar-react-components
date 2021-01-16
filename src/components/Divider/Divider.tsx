import styled from 'styled-components';
import type { DividerProps } from 'src/components/Divider/Divider.d';

const getAlignment = (props: DividerProps): string => {
  if (props.alignment === 'horizontal') {
    return `
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        `;
  } else {
    return `
            display: inline-block;
            border-right: 2px solid rgba(0, 0, 0, 0.1);
        `;
  }
};

const Divider = styled.div<DividerProps>`
  ${getAlignment}
`;

Divider.defaultProps = {
  alignment: 'horizontal',
};

export default Divider;

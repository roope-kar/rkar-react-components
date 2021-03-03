import styled from 'styled-components';
import type { DividerProps } from 'src/components/Divider/Divider.d';

const getAlignment = (props: DividerProps): string => {
  if (props.alignment === 'horizontal') {
    return `
            border-bottom: 2px solid ${props.theme?.background.default};
        `;
  } else {
    return `
            display: inline-block;
            border-right: 2px solid ${props.theme?.background.default};
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

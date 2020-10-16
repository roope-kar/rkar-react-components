import styled from 'styled-components';
import { Text } from 'src/components';
import type { SubTextProps } from 'src/components/SubText/SubText.d';
import theme from 'src/theme';

const SubText = styled(Text)<SubTextProps>`
  font-family: ${(props) => props.theme.font.secondary};
`;

SubText.defaultProps = {
  theme,
};

export default SubText;

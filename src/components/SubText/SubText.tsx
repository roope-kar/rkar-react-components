import styled from 'styled-components';
import { Text } from 'src/components';
import type { SubTextProps } from 'src/components/SubText/SubText.d';

const SubText = styled(Text)<SubTextProps>`
    font-family: "Open Sans";
`;

export default SubText;

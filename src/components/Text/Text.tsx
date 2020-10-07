import styled from 'styled-components';
import type { TextProps } from 'src/components/Text/Text.d';

const Text = styled.span<TextProps>`
    font-family: "Roboto";
    color: red;
`;

export default Text;

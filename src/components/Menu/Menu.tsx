import styled from 'styled-components';
import type { MenuProps } from 'src/components/Menu/Menu.d';
import theme from 'src/theme';

const Menu = styled.div<MenuProps>`
  font-family: ${(props) => props.theme.font.primary};
  border-radius: 4px;
`;

Menu.defaultProps = {
  theme,
};

export default Menu;

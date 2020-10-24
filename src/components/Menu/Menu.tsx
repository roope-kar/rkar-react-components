import React from 'react';
import styled from 'styled-components';
import type { MenuProps, MenuGroupProps, MenuItemProps } from 'src/components/Menu/Menu.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';
import { useListNavigation } from 'src/hooks';

const MenuContainer = styled.ul.attrs({
  role: 'menu',
})<MenuProps>`
  font-family: ${(props) => props.theme.font.primary};
  border: 1px solid ${(props) => props.theme.color.none};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

MenuContainer.defaultProps = {
  theme,
};

const Menu: GroupComponent<MenuProps> = (props) => {
  const ref = React.createRef<HTMLUListElement>();
  useListNavigation(ref);
  return <MenuContainer {...props} ref={ref} />;
};

const GroupContainer = styled.div``;

const GroupTitle = styled.div`
  font-family: 'Open Sans';
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
`;

const GroupItems = styled.ul.attrs({
  role: 'listbox',
})`
  padding: 0;
`;

Menu.Group = function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <GroupContainer>
      <GroupTitle>{title}</GroupTitle>
      <GroupItems>{children}</GroupItems>
    </GroupContainer>
  );
};

const MenuItem = styled.li.attrs({
  'aria-label': 'Action',
  'aria-selected': 'false',
  role: 'menuitem',
  tabIndex: 0,
})<MenuItemProps>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 5px 10px;
  background: transparent;
  cursor: pointer;
  border: 0;
  &:focus {
    outline: 0;
    background: ${(props) => props.theme.color[props.intent]};
  }
`;

Menu.Item = MenuItem;

Menu.Item.defaultProps = {
  theme,
  intent: 'none',
};

export default Menu;

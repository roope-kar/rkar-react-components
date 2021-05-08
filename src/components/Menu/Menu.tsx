import React from 'react';
import styled from 'styled-components';
import { Divider } from 'src/components';
import type { MenuProps, MenuGroupProps, MenuItemProps } from 'src/components/Menu/Menu.d';
import theme from 'src/theme';

const MenuContainer = styled.div<MenuProps>`
  color: ${(props) => props.theme.color.default};
  font-family: ${(props) => props.theme.font.primary};
  background: ${(props) => props.theme.background.default};
  border-radius: 3px;
  overflow: hidden;
`;

MenuContainer.defaultProps = {
  theme,
};

const Menu: React.FunctionComponent<MenuProps> & {
  Group: React.FunctionComponent<MenuGroupProps>,
  Item: React.FunctionComponent<MenuItemProps>,
  Divider: React.FunctionComponent
} = (props) => <MenuContainer {...props} />;

const GroupContainer = styled.div``;

const GroupTitle = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  text-transform: uppercase;
`;

const GroupItems = styled.div``;

Menu.Group = function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <GroupContainer>
      <GroupTitle>{title}</GroupTitle>
      <GroupItems>{children}</GroupItems>
    </GroupContainer>
  );
};

Menu.Item = styled.button<MenuItemProps>`
  display: block;
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.color.default};
  background: transparent;
  padding: 4px 8px;
  border: 0;
  &:focus {
    outline: 0;
    background: ${(props) => props.theme.background[props.intent]};
  }
`;

Menu.Item.defaultProps = {
  theme,
  intent: 'default',
};

Menu.Divider = function MenuDivider() {
  return <Divider alignment={'horizontal'} />;
};

export default Menu;

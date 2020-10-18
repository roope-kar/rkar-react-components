import React from 'react';
import styled from 'styled-components';
import type { MenuProps, MenuGroupProps, MenuItemProps } from 'src/components/Menu/Menu.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';

const StyledMenu = styled.div.attrs({
  role: 'menu',
})<MenuProps>`
  font-family: ${(props) => props.theme.font.primary};
  border: 1px solid ${(props) => props.theme.color.none};
  box-sizing: border-box;
  margin: 0;
`;

StyledMenu.defaultProps = {
  theme,
};

const Menu: GroupComponent<MenuProps> = (props) => {
  return <StyledMenu {...props} />;
};

const StyledMenuGroup = styled.div``;

const StyledTitle = styled.div`
  font-family: 'Open Sans';
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
`;

const StyledItems = styled.div.attrs({
  role: 'listbox',
})``;

Menu.Group = function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <StyledMenuGroup>
      <StyledTitle>{title}</StyledTitle>
      <StyledItems>{children}</StyledItems>
    </StyledMenuGroup>
  );
};

const StyledMenuItem = styled.button.attrs({
  'aria-label': 'Action',
  'aria-selected': 'false',
  role: 'menuitem',
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

Menu.Item = StyledMenuItem;

Menu.Item.defaultProps = {
  theme,
  intent: 'none',
};

export default Menu;

import React from 'react';
import styled from 'styled-components';
import type { MenuProps, MenuGroupProps, MenuItemProps } from 'src/components/Menu/Menu.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';

const StyledMenu = styled.div<MenuProps>`
  font-family: ${(props) => props.theme.font.primary};
  border-radius: 4px;
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
  text-transform: uppercase;
`;

const StyledItems = styled.div``;

Menu.Group = function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <StyledMenuGroup>
      <StyledTitle>{title}</StyledTitle>
      <StyledItems>{children}</StyledItems>
    </StyledMenuGroup>
  );
};

const StyledMenuItem = styled.div<MenuItemProps>`
  padding-top: 2px;
  padding-bottom: 2px;
`;

Menu.Item = StyledMenuItem;

export default Menu;

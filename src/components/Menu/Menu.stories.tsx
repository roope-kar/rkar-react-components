import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Menu, MenuGroup, MenuItem } from 'src/components/Menu';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const SimpleMenu: React.FunctionComponent = () => (
  <Menu>
    <MenuItem>1</MenuItem>
    <MenuItem>2</MenuItem>
    <MenuItem>3</MenuItem>
  </Menu>
);

export const GroupedMenu: React.FunctionComponent = () => (
  <Menu>
    <MenuItem>1</MenuItem>
    <MenuItem>2</MenuItem>
    <MenuGroup title={'Admin'}>
      <MenuItem>2.1</MenuItem>
      <MenuItem>2.2</MenuItem>
      <MenuItem>2.3</MenuItem>
    </MenuGroup>
  </Menu>
);

export const GroupedMenuWithMoreItems: React.FunctionComponent = () => (
  <Menu>
    <MenuItem>1</MenuItem>
    <MenuItem>2</MenuItem>
    <MenuGroup title={'Admin'}>
      <MenuItem>2.1</MenuItem>
      <MenuItem>2.2</MenuItem>
      <MenuItem>2.3</MenuItem>
    </MenuGroup>
    <MenuItem>3</MenuItem>
    <MenuItem>4</MenuItem>
  </Menu>
);

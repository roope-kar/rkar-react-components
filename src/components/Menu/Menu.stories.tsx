import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Menu } from 'src/components/Menu';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const SimpleMenu: React.FunctionComponent = () => (
  <Menu>
    <Menu.Item>1</Menu.Item>
    <Menu.Item>2</Menu.Item>
    <Menu.Item>3</Menu.Item>
  </Menu>
);

export const GroupedMenu: React.FunctionComponent = () => (
  <Menu>
    <Menu.Item>1</Menu.Item>
    <Menu.Item>2</Menu.Item>
    <Menu.Group title={'Admin'}>
      <Menu.Item>2.1</Menu.Item>
      <Menu.Item>2.2</Menu.Item>
      <Menu.Item>2.3</Menu.Item>
    </Menu.Group>
  </Menu>
);

export const GroupedMenuWithMoreItems: React.FunctionComponent = () => (
  <Menu>
    <Menu.Item>1</Menu.Item>
    <Menu.Item>2</Menu.Item>
    <Menu.Group title={'Admin'}>
      <Menu.Item>2.1</Menu.Item>
      <Menu.Item>2.2</Menu.Item>
      <Menu.Item>2.3</Menu.Item>
    </Menu.Group>
    <Menu.Item>3</Menu.Item>
    <Menu.Item>4</Menu.Item>
  </Menu>
);

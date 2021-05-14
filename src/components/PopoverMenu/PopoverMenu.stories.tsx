import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PopoverMenu, Button, Menu } from 'src/components';

export default {
  title: 'PopoverMenu',
  component: PopoverMenu,
  parameters: {
    jest: ['PopoverMenu.test.tsx'],
  },
} as Meta;

export const SimplePopoverMenu: React.FunctionComponent = () => (
  <PopoverMenu content={
      <React.Fragment>
        <Menu.Item>One</Menu.Item>
        <Menu.Item>Two</Menu.Item>
        <Menu.Item>Three</Menu.Item>
      </React.Fragment>
  }>
    <Button>Menu</Button>
  </PopoverMenu>
);

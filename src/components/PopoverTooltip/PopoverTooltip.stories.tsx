import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PopoverMenu, Menu } from 'src/components';

export default {
  title: 'PopoverMenu',
  component: PopoverMenu,
  parameters: {
    jest: ['PopoverMenu.test.tsx'],
  },
} as Meta;

export const SimpleTooltip: React.FunctionComponent = () => (
  <PopoverMenu
    content={
      <Menu>
        <Menu.Item>One</Menu.Item>
        <Menu.Item>Two</Menu.Item>
        <Menu.Item>Three</Menu.Item>
      </Menu>
    }
  >
    Simple PopoverMenu
  </PopoverMenu>
);

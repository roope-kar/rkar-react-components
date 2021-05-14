import React from 'react';
import { Popover, Menu } from 'src/components';
import type { PopoverMenuProps } from 'src/components/PopoverMenu/PopoverMenu.d';

const PopoverMenu: React.FunctionComponent<PopoverMenuProps> = ({ children, content }: PopoverMenuProps) => (
  <Popover content={<Menu>{content}</Menu>}>{children}</Popover>
);

export default PopoverMenu;

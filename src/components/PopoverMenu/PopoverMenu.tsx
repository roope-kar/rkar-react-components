import React from 'react';
import { Popover } from 'src/components';
import type { PopoverMenuProps } from 'src/components/PopoverMenu/PopoverMenu.d';

const PopoverMenu: React.FunctionComponent<PopoverMenuProps> = ({ children, content }) => (
    <Popover content={content}>
        {children}
    </Popover>
);

export default PopoverMenu;

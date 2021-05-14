import React from "react";
import { MenuGroupProps, MenuItemProps } from "src/components/Menu/Menu.d";

export type PopoverMenuProps = React.PropsWithChildren<{
    content: React.ReactElement<MenuGroupProps | MenuItemProps>;
    children: React.ReactNode; 
}>;

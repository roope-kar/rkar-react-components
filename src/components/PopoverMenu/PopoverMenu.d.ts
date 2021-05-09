import React from "react";
import { MenuProps } from "src/components/Menu/Menu.d";

export type PopoverMenuProps = React.PropsWithChildren<{
    content: React.ReactElement<MenuProps>;
}>;

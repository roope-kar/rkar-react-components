import React from 'react';
import { DefaultTheme, Intent } from "src/types";

export type MenuProps = {
  children: React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>
    | React.ReactElement<MenuGroupProps>
    | Array<React.ReactElement<MenuGroupProps>>
};

export type MenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: Intent;
  theme?: DefaultTheme;
};

export type MenuGroupProps = {
  title: string;
  children: React.ReactElement<MenuItemProps>
  | Array<React.ReactElement<MenuItemProps>>;
};

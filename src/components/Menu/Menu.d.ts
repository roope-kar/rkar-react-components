import React from 'react';
import { Intent } from "src/types";

export type MenuProps = {
  children: React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>
    | React.ReactElement<MenuGroupProps>
    | Array<React.ReactElement<MenuGroupProps>>
};

export type MenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent: Intent;
};

export type MenuGroupProps = {
  title: string;
  children: React.ReactElement<MenuItemProps>
  | Array<React.ReactElement<MenuItemProps>>;
};

import { Intent } from "src/types";

export type MenuProps = {
  children: React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>
    | React.ReactElement<MenuGroupProps>
    | Array<React.ReactElement<MenuGroupProps>>
};

export type MenuItemProps = React.PropsWithChildren<{
  intent: Intent;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;

export type MenuGroupProps = {
  title: string;
  children: React.ReactElement<MenuItemProps>
  | Array<React.ReactElement<MenuItemProps>>;
};

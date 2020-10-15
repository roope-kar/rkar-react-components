export type MenuProps = {
  className?: string;
  children: React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>
    | React.ReactElement<MenuGroupProps>
    | Array<React.ReactElement<MenuGroupProps>>
};

export type MenuItemProps = React.PropsWithChildren<{
  className?: string;
}>;

export type MenuGroupProps = {
  title: string;
  className?: string;
  children: React.ReactElement<MenuItemProps>
  | Array<React.ReactElement<MenuItemProps>>;
};

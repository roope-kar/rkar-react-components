export type DataGridProps = {
  children: Array<React.ReactElement<DataGridRowProps>> | React.ReactElement<DataGridRowProps>;
};

export type DataGridRowProps = {
  children: Array<React.ReactElement<DataGridCellProps>> | React.ReactElement<DataGridCellProps>;
};

export type DataGridCellProps = React.PropsWithChildren<{
  children: React.ReactNodeArray | React.ReactNode;
  width: string
}>;

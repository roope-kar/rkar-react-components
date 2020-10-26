export type DialogProps = {
  title: string;
  onClose: () => void;
  children: [React.ReactElement<DialogBodyProps>, React.ReactElement<DialogFooterProps>];
}

export type DialogBodyProps = React.PropsWithChildren<{
  className?: string;
}>;

export type DialogFooterProps = React.PropsWithChildren<{
  className?: string;
}>;

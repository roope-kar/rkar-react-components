export type SelectSearchProps = {
  className?: string;
  children: Array<React.ReactElement<SelectSearchOptionProps>> | React.ReactElement<SelectSearchOptionProps>;
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  onSelect: (value: unknown) => void;
};

export type SelectSearchOptionProps = React.PropsWithChildren<{
  className?: string;
  value: unknown;
}>;

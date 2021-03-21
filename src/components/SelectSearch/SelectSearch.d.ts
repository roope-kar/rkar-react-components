export type SelectSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {};
export type SelectSearchOptionProps = React.OptionHTMLAttributes<HTMLLIElement> & {
  onClick: (option: unknown) => void;
};

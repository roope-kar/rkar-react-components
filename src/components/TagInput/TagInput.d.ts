export type TagInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactElement<TagProps>
      | Array<React.ReactElement<TagProps>>;
  };

export type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

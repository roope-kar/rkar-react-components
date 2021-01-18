import { DefaultTheme } from "src/types";

export type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    theme?: DefaultTheme
};

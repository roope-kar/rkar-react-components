import { Size } from "src/types";

export type TextProps = React.PropsWithChildren<{
    className?: string;
    size?: Size;
    title?: string;
}>;

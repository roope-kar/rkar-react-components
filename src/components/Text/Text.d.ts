import { ShirtSize } from "src/types";

export type TextProps = React.PropsWithChildren<{
    className?: string;
    size?: ShirtSize;
}>;

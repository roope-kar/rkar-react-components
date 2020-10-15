import { ShirtSize, Intent } from "src/types";

export type ButtonProps = React.PropsWithChildren<{
    className?: string;
    size: ShirtSize; 
    intent: Intent;
}>;

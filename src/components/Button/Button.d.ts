import { ShirtSize, Intent } from "src/types";

export type ButtonProps = React.PropsWithChildren<{
    // The size for the button to handle different contexts
    size: ShirtSize; 
    // Describes the nature of the action
    intent: Intent;
    // The action to call on click
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;

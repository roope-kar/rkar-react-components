import { DefaultTheme, Intent } from "src/types";

export type BadgeProps = React.PropsWithChildren<{
    intent: Intent;
    theme?: DefaultTheme;
}>;

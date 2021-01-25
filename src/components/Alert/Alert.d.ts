import { Appearance, DefaultTheme, Intent } from "src/types";

export type AlertProps = {
    // Determinates the icon used and color
    intent: Intent,
    // Accepts default theme
    theme?: DefaultTheme,
    // Use secondary for more minimal look
    appearance: Appearance,
    // Rendered as the description for the component,
    children: React.ReactNodeArray | React.ReactNode;
}

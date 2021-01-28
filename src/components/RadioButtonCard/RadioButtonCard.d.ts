import { DefaultTheme } from "src/types";
import { RadioButtonProps } from "src/components/RadioButton/RadioButton.d";

export type RadioButtonCardProps = RadioButtonProps & {
    children: Array<React.ReactElement<RadioButtonCardTitleProps | RadioButtonCardDescriptionProps>>;
    theme?: DefaultTheme;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export type RadioButtonCardTitleProps = {}

export type RadioButtonCardDescriptionProps = {}

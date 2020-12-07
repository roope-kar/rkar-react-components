import React from 'react';
import { ShirtSize, Intent, Appearance, DefaultTheme } from "src/types";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    // The size for the button to handle different contexts
    size?: ShirtSize; 
    // Describes the nature of the action
    intent?: Intent;
    // Describes the visual look of the button
    appearance?: Appearance;
    // Theme object
    theme: DefaultTheme
};

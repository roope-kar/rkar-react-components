import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      primary: string;
      secondary: string;
    };
    color: {
      success: string;
      warning: string;
      danger: string;
      info: string;
      none: string;
    };
  }
}

export type StringOrUndefined = string | undefined;
export type ShirtSize = 'small' | 'medium' | 'large';
export type Intent = 'success' | 'warning' | 'danger' | 'info' | 'none';

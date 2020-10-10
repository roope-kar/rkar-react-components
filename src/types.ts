import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}

export type StringOrUndefined = string | undefined;
export type ShirtSize = 'small' | 'medium' | 'large';
export type Kind = 'success' | 'warning' | 'danger' | 'info' | 'default';

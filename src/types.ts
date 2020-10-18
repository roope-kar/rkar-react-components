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
      primary: string;
      secondary: string;
      'grey-1': string;
      'grey-2': string;
      'grey-3': string;
      'grey-5': string;
    };
  }
}

export interface GroupComponent<T> extends React.FunctionComponent<T> {
  [name: string]: any;
}

export type StringOrUndefined = string | undefined;
export type ShirtSize = 'small' | 'medium' | 'large';
export type Intent = 'success' | 'warning' | 'danger' | 'info' | 'none' | 'primary' | 'secondary';

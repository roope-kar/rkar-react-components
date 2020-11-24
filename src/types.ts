import 'styled-components';

export interface DefaultTheme {
  font: {
    primary: string;
    secondary: string;
    code: string;
  };
  color: {
    success: string;
    warning: string;
    danger: string;
    info: string;
    none: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      primary: string;
      secondary: string;
      code: string;
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

export interface GroupComponent<T> extends React.FunctionComponent<T> {
  [name: string]: any;
}

export type StringOrUndefined = string | undefined;
export type ShirtSize = 'small' | 'medium' | 'large';
export type Intent = 'success' | 'warning' | 'danger' | 'info' | 'none';
export type Appearance = 'primary' | 'secondary';

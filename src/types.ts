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

/**
 * Enables to use components like List.Item
 */
export interface GroupComponent<T> extends React.FunctionComponent<T> {
  [name: string]: any;
}

export type StringOrUndefined = string | undefined;

/**
 * The size to interpret by the component
 */
export type ShirtSize = 'small' | 'medium' | 'large';

/**
 * The intention interpret by the component
 */
export type Intent = 'success' | 'warning' | 'danger' | 'info' | 'none';

/**
 * The visual variaton interpret by the component
 */
export type Appearance = 'primary' | 'secondary';

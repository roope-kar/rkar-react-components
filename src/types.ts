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
    default: string;
  };
  background: {
    success: string;
    warning: string;
    danger: string;
    info: string;
    default: string;
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
      default: string;
    };
    background: {
      success: string;
      warning: string;
      danger: string;
      info: string;
      default: string;
    };
  }
}

/**
 * Enables to use components like List.Item
 */
export interface GroupComponent<T> extends React.FunctionComponent<T> {
  [name: string]: any;
}

/**
 * The size to interpret by the component
 */
export type Size = 'small' | 'medium' | 'large';

/**
 * The intention interpret by the component
 */
export type Intent = 'success' | 'warning' | 'danger' | 'info' | 'default';

/**
 * The visual variaton interpret by the component
 */
export type Appearance = 'primary' | 'secondary';

/**
 * The sorting directions for most things
 */
export type Direction = 'asc' | 'desc';

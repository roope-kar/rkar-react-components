import styled from 'styled-components';
import { lighten, darken } from 'polished';
import type { ButtonProps } from 'src/components/Button/Button.d';
import theme from 'src/theme';

const getSize = (props: ButtonProps): string => {
  if (props.size === 'small') {
    return `
            line-height: 24px;
            padding: 0px 12px;
            font-size: 12px;
        `;
  } else if (props.size === 'large') {
    return `
            line-height: 40px;
            padding: 0px 16px;
            font-size: 14px;
        `;
  } else {
    return `
            line-height: 32px;  
            padding: 0px 16px;
            font-size: 12px;
        `;
  }
};

const getAppearanceAndIntent = (props: ButtonProps): string => {
  const background = props.theme?.background[props.intent || 'default'] || 'rgba(0, 0, 0, 0.1)';
  const color = props.theme?.color.default;
  if (props.appearance === 'primary') {
    return `
      background: ${background};
      color: ${color};

      &:hover {
        background: ${darken(0.03, background)};
      }
    
      &:active {
        background: ${darken(0.08, background)};
      }
    
      &:focus {
        outline: 0;
        border: 2px solid ${lighten(0.1, background)};
      }
    `;
  } else {
    return `
      background: transparent;
      color: ${color};

      &:hover {
        background: rgba(0,0,0,0.1);
      }
    
      &:active {
        background: rgba(0,0,0,0.2);
      }
    
      &:focus {
        outline: 0;
        border: 2px solid ${lighten(0.1, background)};
      }
    `;
  }
};

const Button = styled.button.attrs({
  'aria-label': 'Button',
  role: 'button',
})<ButtonProps>`
  font-family: ${(props) => props.theme.font.primary};
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 3px;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  font-weight: normal;
  ${(props) => getSize(props)};
  ${(props) => getAppearanceAndIntent(props)};

  &::selection {
    background: none;
  }
`;

Button.defaultProps = {
  size: 'medium',
  intent: 'default',
  appearance: 'primary',
  theme,
};

export default Button;

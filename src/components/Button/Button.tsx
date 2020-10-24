import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { ShirtSize } from 'src/types';
import type { ButtonProps } from 'src/components/Button/Button.d';
import theme from 'src/theme';

const size = (size?: ShirtSize): string => {
  if (size === 'small') {
    return `
            line-height: 24px;
            padding: 0px 12px;
            font-size: 12px;
        `;
  } else if (size === 'large') {
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

const Button = styled.button.attrs({
  'aria-label': 'Button',
  role: 'button',
})<ButtonProps>`
  font-family: 'Roboto';
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  background: ${(props) => props.theme.color[props.intent]};
  color: white;
  font-weight: normal;
  ${(props) => size(props.size)}

  &::selection {
    background: none;
  }

  &:hover {
    background: ${(props) => darken(0.03, props.theme.color[props.intent])};
  }

  &:active {
    background: ${(props) => darken(0.08, props.theme.color[props.intent])};
  }

  &:focus {
    outline: 0;
    border: 2px solid ${(props) => lighten(0.2, props.theme.color[props.intent])};
  }
`;

Button.defaultProps = {
  intent: 'primary',
  theme,
};

export default Button;

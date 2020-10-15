import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { ShirtSize } from 'src/types';
import type { ButtonProps } from 'src/components/Button/Button.d';

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

const Button = styled.button<ButtonProps>`
  font-family: 'Roboto';
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  background: ${(props) => props.theme.color[props.intent]};
  color: white;
  font-weight: normal;

  // Size
  ${(props) => size(props.size)}

  &::selection {
    background: none;
  }

  &:hover {
    background: ${(props) => lighten(0.02, props.theme.color[props.intent])};
  }

  &:active {
    background: ${(props) => darken(0.05, props.theme.color[props.intent])};
  }

  &:focus {
    outline: 0;
    border: 2px solid ${(props) => lighten(0.2, props.theme.color[props.intent])};
  }
`;

Button.defaultProps = {
  intent: 'none',
};

export default Button;

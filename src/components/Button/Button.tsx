import styled from 'styled-components';
import { ShirtSize } from 'src/types';
import { ButtonProps } from 'src/components/Button/Button.d';

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
}

const Button = styled.button<ButtonProps>`
    font-family: "Roboto";
    border: 2px solid transparent;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    background: darkslategrey;
    color: white;
    font-weight: normal;

    // Size
    ${props => size(props.size)}

    &::selection {
        background: none;
    }

    &:hover {
        // background: Lighten 2%
    }

    &:active {
        // background: Darken 5% 
    }

    &:focus {
        outline: 0;
        // border: 2px solid Lighten 20%;
    }
`;

export default Button;

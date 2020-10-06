import React from 'react';
import { makeClassName } from 'src/utils';
import type { ButtonProps } from 'src/components/Button/Button';
import 'src/components/Button/Button.scss';

const Button: React.FunctionComponent<ButtonProps> = ({ className, children, size = 'medium' }) => (
    <button className={makeClassName(['rkar-Button', `rkar-Button-size--${size}`, className])}>{children}</button>
);

export default Button;

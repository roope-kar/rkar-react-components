import React from 'react';
import { makeClassName } from 'lib/utils';
import type { ButtonProps } from 'lib/components/Button/Button.d';

const Button: React.FunctionComponent<ButtonProps> = ({ className, children }) => (
    <button className={makeClassName(['rkar-Button', className])}>{children}</button>
);

export default Button;

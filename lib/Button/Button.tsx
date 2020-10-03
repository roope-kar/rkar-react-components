import 'lib/Button/Button.scss';

import React from 'react';
import { makeClassName } from 'lib/utils';
import { ButtonProps } from 'lib/Button/Button.d';

export default function Button({ className, children }: ButtonProps) {
    return (
        <button className={makeClassName(['rkar-Button', className])}>{children}</button>
    );
};

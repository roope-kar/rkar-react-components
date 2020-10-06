import React from 'react';
import { makeClassName } from 'src/utils';
import type { TextProps } from 'src/components/Text/Text';
import 'src/components/Text/Text.scss';

const Text: React.FunctionComponent<TextProps> = ({ className, children, size = 'small' }) => (
    <span className={makeClassName(['rkar-Text', `rkar-Text-size--${size}`, className])}>{children}</span>
);

export default Text;

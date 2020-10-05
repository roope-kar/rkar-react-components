import React from 'react';
import { makeClassName } from 'lib/utils';
import type { TextProps } from 'lib/components/Text/Text.d';

const Text: React.FunctionComponent<TextProps> = ({ className, children }) => (
    <span className={makeClassName(['rkar-Text', className])}>{children}</span>
);

export default Text;

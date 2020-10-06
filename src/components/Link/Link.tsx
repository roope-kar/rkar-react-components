import React from 'react';
import { makeClassName } from 'src/utils';
import type { LinkProps } from 'src/components/Link/Link';

const Link: React.FunctionComponent<LinkProps> = ({ className, children }) => (
    <a className={makeClassName(['rkar-Link', className])}>{children}</a>
);

export default Link;

import React from 'react';
import { makeClassName } from 'lib/utils';
import type { LinkProps } from 'lib/components/Link/Link.d';

const Link: React.FunctionComponent<LinkProps> = ({ className, children }) => (
    <a className={makeClassName(['rkar-Link', className])}>{children}</a>
);

export default Link;

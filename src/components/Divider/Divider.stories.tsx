import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Divider, Menu, Link } from 'src/components';
import 'src/types';

export default {
  title: 'Divider',
  component: Divider,
  parameters: {
    jest: ['Divider.test.tsx'],
  },
} as Meta;

export const DefaultDivider: React.FunctionComponent = () => <Divider />;

export const VerticalDivider: React.FunctionComponent = () => <Divider alignment={'vertical'} />;

export const HorizontalDivider: React.FunctionComponent = () => <Divider alignment={'horizontal'} />;

export const UsageInMenu: React.FunctionComponent = () => (
  <Menu>
    <Menu.Item>1</Menu.Item>
    <Menu.Item>2</Menu.Item>
    <Divider alignment={'horizontal'} />
    <Menu.Item>3</Menu.Item>
    <Menu.Item>4</Menu.Item>
    <Menu.Item>5</Menu.Item>
  </Menu>
);

export const UsageAsItemSeparator: React.FunctionComponent = () => (
  <div style={{ display: 'flex', flexFlow: 'nowrap row' }}>
    <Link href={'#'}>One</Link>
    <Divider alignment={'vertical'} />
    <Link href={'#'}>Two</Link>
    <Divider alignment={'vertical'} />
    <Link href={'#'}>Three</Link>
    <Divider alignment={'vertical'} />
    <Link href={'#'}>Four</Link>
    <Divider alignment={'vertical'} />
    <Link href={'#'}>Five</Link>
  </div>
);

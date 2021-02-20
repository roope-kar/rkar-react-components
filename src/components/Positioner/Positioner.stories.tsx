import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Positioner, Text, Menu } from 'src/components';
import 'src/types';

export default {
  title: 'Positioner',
  component: Positioner,
  parameters: {
    jest: ['Positioner.test.tsx'],
  },
} as Meta;

export const PositionerText: React.FunctionComponent = () => (
  <Positioner content={() => <Text>content</Text>}>
    <Text>Position text by this content</Text>
  </Positioner>
);

export const PositionerMenu: React.FunctionComponent = () => (
  <Positioner
    content={() => (
      <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
      </Menu>
    )}
  >
    <Text>Positioner for Menu</Text>
  </Positioner>
);

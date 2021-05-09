import React from 'react';
import { PopoverMenu, Menu } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<PopoverMenu content={
      <Menu>
        <Menu.Item>one</Menu.Item>
        <Menu.Item>two</Menu.Item>
        <Menu.Item>three</Menu.Item>
        <Menu.Item>four</Menu.Item>
        <Menu.Item>five</Menu.Item>
      </Menu>
    }>Test</PopoverMenu>);
  });
});

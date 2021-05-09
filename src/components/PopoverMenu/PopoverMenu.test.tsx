import React from 'react';
import { PopoverMenu } from 'src/components';
import { render, cleanup } from '@testing-library/react';
import { Menu } from '../Menu';

describe('Button', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<PopoverMenu content={(
        <Menu>
            <Menu.Item></Menu.Item>
            <Menu.Item></Menu.Item>
            <Menu.Item></Menu.Item>
            <Menu.Item></Menu.Item>
        </Menu>
    )}>
        Trigger PopoverMenu
    </PopoverMenu>);
  });
});

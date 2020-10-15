import React from 'react';
import { Menu, MenuGroup, MenuItem } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Menu', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container: HTMLElement = render(
      <Menu>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </Menu>,
    ).container;

    expect(getByText(container, '1').textContent).toStrictEqual('1');
    expect(getByText(container, '2').textContent).toStrictEqual('2');
    expect(getByText(container, '3').textContent).toStrictEqual('3');
  });

  test('group items under a title', () => {
    const container: HTMLElement = render(
      <Menu>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuGroup title={'Admin'}>
          <MenuItem>1.1</MenuItem>
          <MenuItem>1.2</MenuItem>
        </MenuGroup>
      </Menu>,
    ).container;

    expect(getByText(container, '1').textContent).toStrictEqual('1');
    expect(getByText(container, '2').textContent).toStrictEqual('2');
    expect(getByText(container, '1.1').textContent).toStrictEqual('1.1');
    expect(getByText(container, '1.2').textContent).toStrictEqual('1.2');
  });
});

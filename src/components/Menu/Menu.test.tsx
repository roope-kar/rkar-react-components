import React from 'react';
import { Menu } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Menu', () => {
  afterEach(cleanup);

  test('renders', () => {
    const container = render(
      <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
      </Menu>,
    ).container as HTMLElement;

    expect(getByText(container, '1').textContent).toStrictEqual('1');
    expect(getByText(container, '2').textContent).toStrictEqual('2');
    expect(getByText(container, '3').textContent).toStrictEqual('3');
  });

  test('group items under a title', () => {
    const container = render(
      <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Group title={'Admin'}>
          <Menu.Item>1.1</Menu.Item>
          <Menu.Item>1.2</Menu.Item>
        </Menu.Group>
      </Menu>,
    ).container as HTMLElement;

    expect(getByText(container, '1').textContent).toStrictEqual('1');
    expect(getByText(container, '2').textContent).toStrictEqual('2');
    expect(getByText(container, '1.1').textContent).toStrictEqual('1.1');
    expect(getByText(container, '1.2').textContent).toStrictEqual('1.2');
  });

  test('should work without ThemeProvider', () => {});

  test('should read font from theme', () => {});
});

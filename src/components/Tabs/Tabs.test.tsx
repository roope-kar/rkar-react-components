import React from 'react';
import { Tabs } from 'src/components';
import { render, cleanup, getByText, fireEvent } from '@testing-library/react';

describe('Tabs', () => {
  afterEach(cleanup);

  test('renders all titles as link and the active content', () => {
    const container: HTMLElement = render(
      <Tabs activeTab={'1'} onSetActiveTab={() => null}>
        <Tabs.Tab title={'1'}>one</Tabs.Tab>
        <Tabs.Tab title={'2'}>two</Tabs.Tab>
        <Tabs.Tab title={'3'}>three</Tabs.Tab>
      </Tabs>,
    ).container;

    expect(getByText(container, '1').textContent).toStrictEqual('1');
    expect(getByText(container, '2').textContent).toStrictEqual('2');
    expect(getByText(container, '3').textContent).toStrictEqual('3');
    expect(getByText(container, 'one').textContent).toStrictEqual('one');
  });

  test('should call onSetActiveTab callback on Tabs.Tab title click', () => {
    const onSetActiveTab = jest.fn();

    const container: HTMLElement = render(
      <Tabs activeTab={'1'} onSetActiveTab={onSetActiveTab}>
        <Tabs.Tab title={'1'}>one</Tabs.Tab>
        <Tabs.Tab title={'2'}>two</Tabs.Tab>
        <Tabs.Tab title={'3'}>three</Tabs.Tab>
      </Tabs>,
    ).container;

    fireEvent.click(getByText(container, '1'));

    expect(onSetActiveTab).toBeCalledWith('1');
  });
});

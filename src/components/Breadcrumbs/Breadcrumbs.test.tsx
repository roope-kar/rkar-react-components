import React from 'react';
import { Breadcrumbs } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Breadcrumbs', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Breadcrumbs />).container;
  });

  test('should render all children as links', () => {
    const container: HTMLElement = render(
      <Breadcrumbs>
        <Breadcrumbs.Item>One</Breadcrumbs.Item>
        <Breadcrumbs.Item>Two</Breadcrumbs.Item>
        <Breadcrumbs.Item>Three</Breadcrumbs.Item>
      </Breadcrumbs>,
    ).container;

    const links = container.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;

    expect(links.length).toBe(3);
  });
});

import React from 'react';
import { Breadcrumbs } from 'src/components';
import { render, cleanup } from '@testing-library/react';

describe('Breadcrumbs', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<Breadcrumbs />);
  });

  test('should render all children as links', () => {
    const container = render(
      <Breadcrumbs>
        <Breadcrumbs.Item>One</Breadcrumbs.Item>
        <Breadcrumbs.Item>Two</Breadcrumbs.Item>
        <Breadcrumbs.Item>Three</Breadcrumbs.Item>
      </Breadcrumbs>,
    ).container as HTMLElement;

    const links = container.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;

    expect(links.length).toBe(3);
  });
});

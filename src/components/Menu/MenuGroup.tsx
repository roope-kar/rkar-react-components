import React from 'react';
import styled from 'styled-components';
import type { MenuGroupProps } from 'src/components/Menu/Menu.d';

const Container = styled.div``;

const Title = styled.div`
  font-family: 'Open Sans';
  font-size: 12px;
  text-transform: uppercase;
`;

const Items = styled.div``;

const MenuGroup: React.FunctionComponent<MenuGroupProps> = ({ title, children }: MenuGroupProps) => (
  <Container>
    <Title>{title}</Title>
    <Items>{children}</Items>
  </Container>
);

export default MenuGroup;

import React from 'react';
import styled from 'styled-components';
import { BreadcrumbsProps } from 'src/components/Breadcrumbs/Breadcrumbs.d';
import { GroupComponent } from 'src/types';
import { Link } from 'src/components';
import theme from 'src/theme';

const Container = styled.div`
  display: flex;
  flex-flow: nowrap row;
`;

const Divider = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  color: ${(props) => props.theme.color.default};
`;

Divider.defaultProps = {
  theme,
};

const Breadcrumbs: GroupComponent<BreadcrumbsProps> = ({ children }: BreadcrumbsProps) => (
  <Container>
    {React.Children.map(children, (node, index) => {
      return index !== 0 ? (
        <React.Fragment>
          <Divider>{'>'}</Divider> {node}
        </React.Fragment>
      ) : (
        node
      );
    })}
  </Container>
);

Breadcrumbs.Item = Link;

export default Breadcrumbs;

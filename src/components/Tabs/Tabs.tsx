import React from 'react';
import styled from 'styled-components';
import type { TabsProps, TabProps } from 'src/components/Tabs/Tabs.d';
import { GroupComponent } from 'src/types';

const Container = styled.div``;

const Titles = styled.ul.attrs({
  role: 'navigation',
})`
  list-style: none;
`;

const Title = styled.li`
  padding: 0;
`;

const Content = styled.div``;

const Tab = styled.div``;

const Tabs: GroupComponent<TabsProps> = ({ children, className = '', activeTab, onSetActiveTab }: TabsProps) => {
  const activeTabNode = children.find((tabNode) => tabNode.props.title === activeTab);
  return (
    <Container className={className}>
      <Titles>
        {React.Children.map(children, (tabNode) => (
          <Title onClick={() => onSetActiveTab(tabNode.props.title)}>{tabNode?.props.title}</Title>
        ))}
      </Titles>
      <Content>{activeTabNode}</Content>
    </Container>
  );
};

Tabs.Tab = function TabsTab(props: TabProps) {
  return <Tab {...props} />;
};

export default Tabs;

import React from 'react';
import styled from 'styled-components';
import type { TabsProps, TabProps } from 'src/components/Tabs/Tabs.d';
import { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Container = styled.div``;

const Titles = styled.ul.attrs({
  role: 'navigation',
})`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: nowrap row;
`;

const Title = styled.li`
  font-family: ${(props) => props.theme.font.primary};
  padding: 6px 12px;
  min-width: 75px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 0px;
  border-right: 0px;
`;

Title.defaultProps = {
  theme,
};

const Tab = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  padding: 6px 12px;
`;

Tab.defaultProps = {
  theme,
};

const Tabs: GroupComponent<TabsProps> = ({ children, className = '', activeTab, onSetActiveTab }: TabsProps) => {
  const activeTabNode = children.find((tabNode) => tabNode.props.title === activeTab);
  return (
    <Container className={className}>
      <Titles>
        {React.Children.map(children, (tabNode) => (
          <Title onClick={() => onSetActiveTab(tabNode.props.title)}>{tabNode?.props.title}</Title>
        ))}
      </Titles>
      {activeTabNode}
    </Container>
  );
};

Tabs.Tab = function TabsTab(props: TabProps) {
  return <Tab {...props} />;
};

export default Tabs;

import React from 'react';
import styled from 'styled-components';
import type { TabsProps, TabProps, TitleProps } from 'src/components/Tabs/Tabs.d';
import { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Container = styled.div`
  color: rgba(255, 255, 255, 0.9);
`;

const Titles = styled.ul.attrs({
  role: 'navigation',
})`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: nowrap row;
`;

const Title = styled.li<TitleProps>`
  cursor: pointer;
  font-family: ${(props) => props.theme.font.primary};
  padding: 8px 16px;
  min-width: 75px;
`;

Title.defaultProps = {
  theme,
  isActive: false,
};

const Tab = styled.div<TabProps>`
  font-family: ${(props) => props.theme.font.primary};
  padding: 8px 16px;
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
          <Title
            onClick={() => onSetActiveTab(tabNode.props.title)}
            isActive={activeTabNode?.props.title === activeTab}
          >
            {tabNode?.props.title}
          </Title>
        ))}
      </Titles>
      {activeTabNode}
    </Container>
  );
};

Tabs.Tab = Tab;

export default Tabs;

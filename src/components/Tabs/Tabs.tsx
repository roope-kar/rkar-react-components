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

const Title = styled.button<TitleProps>`
  cursor: pointer;
  font-family: ${(props) => props.theme.font.primary};
  padding: 8px 16px;
  min-width: 75px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 0px;
  box-sizing: border-box;
  &:first-child  {
    border-top-left-radius: 3px;
  }
  &:last-child {
    border-top-right-radius: 3px;
  }
`;

Title.defaultProps = {
  theme,
  isActive: false,
};

const Tab = styled.div<TabProps>`
  font-family: ${(props) => props.theme.font.primary};
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 100px;
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

import React from 'react';
import styled from 'styled-components';
import type { TooltipProps } from 'src/components/Tooltip/Tooltip.d';
import theme from 'src/theme';

const Container = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  display: inline-block;
  line-height: 22px;
  border-radius: 3px;
  padding: 0px 8px;
  font-size: 12px;
  background: black;
  color: white;
  &::selection {
    background: transparent;
  }
`;

Container.defaultProps = {
  theme,
};

const Tooltip: React.FunctionComponent<TooltipProps> = ({ children }: TooltipProps) => (
  <Container>{children}</Container>
);

export default Tooltip;

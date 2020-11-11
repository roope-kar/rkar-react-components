import React from 'react';
import styled from 'styled-components';
import type { TooltipProps } from 'src/components/Tooltip/Tooltip.d';

const Container = styled.div.attrs({
  role: 'dialog',
})<TooltipProps>`
  font-family: Roboto;
  display: inline-block;
  line-height: 22px;
  border-radius: 4px;
  padding: 0px 10px;
  font-size: 12px;
  background: black;
  color: white;
  &::selection {
    background: transparent;
  }
`;

const Tooltip: React.FunctionComponent<TooltipProps> = ({ children }: TooltipProps) => {
  return <Container>{children}</Container>;
};

export default Tooltip;

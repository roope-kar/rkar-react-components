import React from 'react';
import styled from 'styled-components';
import type { TooltipProps } from 'src/components/Tooltip/Tooltip.d';

const Container = styled.div.attrs({
  role: 'dialog',
})<TooltipProps>``;

const Tooltip: React.FunctionComponent<TooltipProps> = ({ children }: TooltipProps) => {
  return <Container>{children}</Container>;
};

export default Tooltip;

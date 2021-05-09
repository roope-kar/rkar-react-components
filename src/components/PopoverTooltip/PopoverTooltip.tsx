import React from 'react';
import type { PopoverTooltipProps } from 'src/components/PopoverTooltip/PopoverTooltip.d';
import { Popover, Tooltip } from 'src/components';

const PopoverTooltip: React.FunctionComponent<PopoverTooltipProps> = ({ children, content }: PopoverTooltipProps) => (
  <Popover content={<Tooltip>{content}</Tooltip>}>
      {children}
  </Popover>
);

export default PopoverTooltip;

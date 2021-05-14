import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PopoverTooltip, Button } from 'src/components';

export default {
  title: 'PopoverTooltip',
  component: PopoverTooltip,
  parameters: {
    jest: ['PopoverTooltip.test.tsx'],
  },
} as Meta;

export const SimplePopoverTooltip: React.FunctionComponent = () => (
  <PopoverTooltip content={'Tooltip with some content'}>
    <Button>Menu</Button>
  </PopoverTooltip>
);

import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Avatar from 'src/components/Avatar/Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    jest: ['Avatar.test.tsx'],
  },
} as Meta;

export const AllAvatars: Story = () => (
  <div style={{ display: 'flex', flexFlow: 'wrap column' }}>
    <Avatar src={''} size={'small'} appearance={'primary'} />
    <Avatar src={''} size={'medium'} appearance={'primary'} />
    <Avatar src={''} size={'large'} appearance={'primary'} />
  </div>
);

export const SmallAvatar: React.FunctionComponent = () => <Avatar src={''} size={'small'} appearance={'primary'} />;

export const MediumAvatar: React.FunctionComponent = () => <Avatar src={''} size={'medium'} appearance={'primary'} />;

export const LargeAvatar: React.FunctionComponent = () => <Avatar src={''} size={'large'} appearance={'primary'} />;

export const SecondaryAvatar: React.FunctionComponent = () => (
  <Avatar src={''} size={'small'} appearance={'secondary'} />
);

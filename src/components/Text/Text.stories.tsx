import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Text } from 'src/components';

export default {
  title: 'Text',
  component: Text,
} as Meta;

export const SmallText: React.FunctionComponent = () => <Text size={'small'}>Small text</Text>;

export const MediumText: React.FunctionComponent = () => <Text size={'medium'}>Medium text</Text>;

export const LargeText: React.FunctionComponent = () => <Text size={'large'}>Large text</Text>;

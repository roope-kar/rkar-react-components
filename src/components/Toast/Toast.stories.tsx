import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Toast from 'src/components/Toast/Toast';

export default {
  title: 'Toast',
  component: Toast,
  parameters: {
    jest: ['Toast.test.tsx'],
  },
} as Meta;

export const AllToasts: React.FunctionComponent = () => (
  <div style={{ display: 'flex', flexFlow: 'wrap column' }}>
    <Toast intent={'default'}>Filters have been reset</Toast>
    <Toast intent={'info'}>There is a new update available</Toast>
    <Toast intent={'success'}>Success! User has been created.</Toast>
    <Toast intent={'danger'}>Sorry, something went wrong!</Toast>
    <Toast intent={'warning'}>Update might take some time to apply, please wait ...</Toast>
  </div>
);

export const InfoToast: React.FunctionComponent = () => <Toast intent={'info'}>There is a new update available</Toast>;

export const SuccessToast: React.FunctionComponent = () => (
  <Toast intent={'success'}>Success! User has been created.</Toast>
);

export const WarningToast: React.FunctionComponent = () => (
  <Toast intent={'warning'}>Update might take some time to apply, please wait ...</Toast>
);

export const DangerToast: React.FunctionComponent = () => <Toast intent={'danger'}>Sorry, something went wrong!</Toast>;

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Alert from 'src/components/Alert/Alert';
import theme from 'src/theme';

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    jest: ['Alert.test.tsx'],
  },
} as Meta;

export const AllAlerts: React.FunctionComponent = () => (
  <div style={{ display: 'flex', flexFlow: 'wrap column' }}>
    <Alert appearance={'primary'} intent={'default'} theme={theme}>
      <Alert.Title>Please note</Alert.Title>
      <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
    </Alert>
    <Alert appearance={'primary'} intent={'info'} theme={theme}>
      <Alert.Title>Please note</Alert.Title>
      <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
    </Alert>
    <Alert appearance={'primary'} intent={'success'} theme={theme}>
      <Alert.Title>Please note</Alert.Title>
      <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
    </Alert>
    <Alert appearance={'primary'} intent={'danger'} theme={theme}>
      <Alert.Title>Please note</Alert.Title>
      <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
    </Alert>
    <Alert appearance={'primary'} intent={'warning'} theme={theme}>
      <Alert.Title>Please note</Alert.Title>
      <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
    </Alert>
  </div>
);

export const InfoAlert: React.FunctionComponent = () => (
  <Alert intent={'info'} appearance={'primary'} theme={theme}>
    <Alert.Title>Please note</Alert.Title>
    <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
  </Alert>
);

export const SuccessAlert: React.FunctionComponent = () => (
  <Alert intent={'success'} appearance={'primary'} theme={theme}>
    <Alert.Title>Please note</Alert.Title>
    <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
  </Alert>
);

export const WarningAlert: React.FunctionComponent = () => (
  <Alert intent={'warning'} appearance={'primary'} theme={theme}>
    <Alert.Title>Please note</Alert.Title>
    <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
  </Alert>
);

export const DangerAlert: React.FunctionComponent = () => (
  <Alert intent={'danger'} appearance={'primary'} theme={theme}>
    <Alert.Title>Please note</Alert.Title>
    <Alert.Description>This is the descriptive content for the alert.</Alert.Description>
  </Alert>
);

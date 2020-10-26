import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Dialog } from 'src/components/Dialog';
import 'src/types';

export default {
  title: 'Dialog',
  component: Dialog,
} as Meta;

export const SimpleDialog: React.FunctionComponent = () => (
  <Dialog title={'MyDialog'} onClose={() => null}>
    <Dialog.Body>body</Dialog.Body>
    <Dialog.Footer>footer</Dialog.Footer>
  </Dialog>
);

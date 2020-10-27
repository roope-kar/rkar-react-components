import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Dialog } from 'src/components/Dialog';
import { Text } from 'src/components';
import 'src/types';

export default {
  title: 'Dialog',
  component: Dialog,
} as Meta;

export const SimpleDialog: React.FunctionComponent = () => (
  <Dialog title={'MyDialog'} onClose={() => null}>
    <Dialog.Body>
      <Text>body</Text>
    </Dialog.Body>
    <Dialog.Footer>
      <Text>footer</Text>
    </Dialog.Footer>
  </Dialog>
);

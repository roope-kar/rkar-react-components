import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, Paragraph, Heading, Dialog, Text } from 'src/components';
import { ShirtSize } from 'src/types';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    jest: ['Button.test.tsx'],
  },
} as Meta;

const AllButtons: Story<{ size: ShirtSize }> = ({ size }: { size: ShirtSize }) => (
  <div style={{ display: 'flex', flexFlow: 'nowrap row', justifyContent: 'space-around' }}>
    <Button size={size} intent={'primary'} onClick={() => null}>
      Small Button
    </Button>
    <Button size={size} intent={'secondary'} onClick={() => null}>
      Small Button
    </Button>
    <Button size={size} intent={'none'} onClick={() => null}>
      Small Button
    </Button>
    <Button size={size} intent={'info'} onClick={() => null}>
      Small Button
    </Button>
    <Button size={size} intent={'success'} onClick={() => null}>
      Small Button
    </Button>
    <Button size={size} intent={'danger'} onClick={() => null}>
      Small Button
    </Button>
    <Button size={size} intent={'warning'} onClick={() => null}>
      Small Button
    </Button>
  </div>
);

export const AllButtonsTest = AllButtons.bind({});

AllButtonsTest.args = {
  size: 'medium',
};

export const ButtonForSmallContext: React.FunctionComponent = () => (
  <div>
    <Button size={'small'} intent={'primary'} onClick={() => null}>
      +
    </Button>
  </div>
);

export const ButtonForMediumContext: React.FunctionComponent = () => (
  <Dialog title={'Confirm Delete'} onClose={() => null}>
    <Dialog.Body>
      <Text size={'medium'}>Are you sure you want to delete this resource?</Text>
    </Dialog.Body>
    <Dialog.Footer>
      <Button size={'medium'} intent={'danger'} onClick={() => null}>
        Delete
      </Button>
    </Dialog.Footer>
  </Dialog>
);

export const ButtonForLargeContext: React.FunctionComponent = () => (
  <div>
    <Heading>Default Heading</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit accumsan massa, ac finibus ligula
      tincidunt ut. Curabitur turpis enim, lacinia et tortor non, finibus suscipit magna. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Phasellus hendrerit accumsan massa, ac finibus ligula tincidunt ut. Curabitur turpis
      enim, lacinia et tortor non, finibus suscipit magna.
    </Paragraph>
    <Button size={'large'} intent={'info'} onClick={() => null}>
      Learn more
    </Button>
  </div>
);

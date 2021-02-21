import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Transition, Button } from 'src/components';
import 'src/types';

export default {
  title: 'Transition',
  component: Transition,
  parameters: {
    jest: ['Transition.test.tsx'],
  },
} as Meta;

const A: React.FunctionComponent = () => <div>A</div>;

export const SimpleTransition: React.FunctionComponent = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <Button onClick={handleClick}>Fade In / Out</Button>
      <Transition cssRule={'opacity 2s linear'}>
        <A />
      </Transition>
    </div>
  );
};

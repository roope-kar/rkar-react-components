import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Transition } from 'src/components';
import 'src/types';

export default {
  title: 'Transition',
  component: Transition,
  parameters: {
    jest: ['Transition.test.tsx'],
  },
} as Meta;

export const SimpleCode: React.FunctionComponent = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      <Transition show={show} onEnterClassName={'fadein'} onLeaveClassName={'fadeout'}>
        I will fadein and fadeout!
      </Transition>
    </div>
  );
};

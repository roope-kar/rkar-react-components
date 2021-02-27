import React from 'react';
import { useTransition } from 'src/hooks';
import type { AnimateProps } from 'src/components/Animate/Animate.d';

const Animate: React.FunctionComponent<AnimateProps> = ({ children }) => {
  const [count, setCount] = React.useState<number>(0);
  useTransition((time: number) => {
    setCount(time);
  });
  return children(count);
};

export default Animate;

import React from 'react';
import { TransitionProps } from 'src/components/Transition/Transition.d';

const Transition: React.FunctionComponent<TransitionProps> = ({ children, cssRule }: TransitionProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.transition = cssRule;
      ref.current.addEventListener('transitionstart', () => console.log('starting ...'));
      ref.current.addEventListener('transitionend', () => console.log('done'));
    }
  }, []);
  return <div ref={ref}>{children}</div>;
};

export default Transition;

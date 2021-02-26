import React from 'react';
import type { AnimateProps } from 'src/components/Animate/Animate.d';

const Animate: React.FunctionComponent<AnimateProps> = ({ children }) => {
  const [count, setCount] = React.useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef<number>(0);
  const previousTimeRef = React.useRef<number>(0);

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
    }
    previousTimeRef.current = time;
    requestRef.current = window.requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return children(count);
};

export default Animate;

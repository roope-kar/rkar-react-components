import React from 'react';
import type { AnimateProps } from 'src/components/Animate/Animate.d';

const Animate = ({ children, from, to }: AnimateProps): React.ReactNode => {
  const [styles, setStyles] = React.useState<{}>({});
  const prevStylesRef = React.useRef<number | null>(null);
  const requestRef = React.useRef<number | null>(null);

  const animate = (time: number, current: {}, final: {}) => {
    if (prevStylesRef.current != null) {
      setStyles((prevStyles) => ({ ...prevStyles, ...current }));
    }
    requestRef.current = requestAnimationFrame((time: number) => animate(time, styles, final));
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame((time: number) => animate(time, from, to));
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return children(styles);
};

export default Animate;

import React from 'react';
import type { AnimateProps } from 'src/components/Animate/Animate.d';

const Animate: React.FunctionComponent<AnimateProps> = ({ inRule, outRule, children }: AnimateProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('animationstart', () => console.log('mount start'));
      ref.current.addEventListener('animationend', () => console.log('mount end'));
      ref.current.style.animation = inRule;
    }
    return () => {
      if (ref.current) {
        ref.current.addEventListener('animationstart', () => console.log('unmount start'));
        ref.current.addEventListener('animationend', () => {
          setShow(false);
          console.log('unmount end');
        });
        ref.current.style.animation = outRule;
      }
    };
  }, []);
  return <div ref={ref}>{show && children}</div>;
};

export default Animate;

import React from 'react';
import type { TransitionProps } from 'src/components/Transition/Transition.d';

const Transition: React.FunctionComponent<TransitionProps> = ({
  show,
  children,
  onEnterClassName,
  onLeaveClassName,
}: TransitionProps) => {
  const selfRef = React.useRef<HTMLDivElement>(null);
  const [showInner, setShowInner] = React.useState<boolean>(true);

  const handleEntering = () => {
    selfRef.current?.removeEventListener('animationend', handleEntering);
    selfRef.current?.classList.remove(onEnterClassName);
  };

  const handleLeaving = () => {
    setShowInner(() => false);
    selfRef.current?.removeEventListener('animationend', handleLeaving);
    selfRef.current?.classList.remove(onLeaveClassName);
  };

  React.useEffect(() => {
    if (show) {
      setShowInner(() => true);
      selfRef.current?.addEventListener('animationend', handleEntering);
      selfRef.current?.classList.add(onEnterClassName);
    } else {
      selfRef.current?.addEventListener('animationend', handleLeaving);
      selfRef.current?.classList.add(onLeaveClassName);
    }
  }, [show, selfRef.current]);

  return <div ref={selfRef}>{showInner ? children : null}</div>;
};

export default Transition;

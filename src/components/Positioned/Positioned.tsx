import React from 'react';
import { Portal } from 'src/components';
import type { PositionedProps } from 'src/components/Positioned/Positioned.d';

const Positioned: React.FunctionComponent<PositionedProps> = ({ x, y, children }: PositionedProps) => {
  const ref = React.useRef<HTMLDivElement>(document.createElement('div'));

  React.useEffect(() => {
    document.body.appendChild(ref.current);
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
    return () => {
      document.body.removeChild(ref.current);
    };
  }, []);

  return <Portal to={ref.current}>{children}</Portal>;
};

export default Positioned;

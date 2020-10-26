import React from 'react';
import styled from 'styled-components';
import type { PositionerProps } from 'src/components/Positioner/Positioner.d';

const Trigger = styled.div.attrs({
  tabIndex: 0,
})``;

const Positioner: React.FunctionComponent<PositionerProps> = ({ children, content }: PositionerProps) => {
  const [position, setPosition] = React.useState<{ x: number; y: number }>();
  const onTriggerClick = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = (event.target as HTMLElement).getBoundingClientRect();
    setPosition({ x: left, y: top });
  }, []);
  return (
    <React.Fragment>
      <Trigger onClick={onTriggerClick}>{children}</Trigger>
      {!!position ? content(position) : null}
    </React.Fragment>
  );
};

export default Positioner;

import { createPortal } from 'react-dom';
import type { PortalProps } from 'src/components/Portal/Portal.d';

const Positioner: React.FunctionComponent<PortalProps> = ({ children, to }: PortalProps) => {
  return createPortal(children, to);
};

export default Positioner;

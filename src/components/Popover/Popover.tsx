import React from 'react';
import styled from 'styled-components';
import type { PopoverProps } from 'src/components/Popover/Popover.d';
import { Positioner, Positioned } from 'src/components';

const Container = styled.div`
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Popover: React.FunctionComponent<PopoverProps> = ({ content, children }) => {
    return <Positioner content={(position) => (
        <Positioned x={position.x} y={position.y}>
            <Container>{content}</Container>
        </Positioned>
    )}>
        {children}
    </Positioner>;
}

export default Popover;

import React from 'react';
import styled from 'styled-components';
import type { DialogProps, DialogBodyProps, DialogFooterProps } from 'src/components/Dialog/Dialog.d';
import { GroupComponent } from 'src/types';

const Backdrop = styled.div``;

const Container = styled.div``;

const Header = styled.div``;

const Title = styled.h2``;

const Close = styled.button``;

const Dialog: GroupComponent<DialogProps> = ({ children, title, onClose }: DialogProps) => {
  return (
    <Backdrop>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose}>x</Close>
        </Header>
        {children}
      </Container>
    </Backdrop>
  );
};

Dialog.Body = styled.div<DialogBodyProps>``;

Dialog.Footer = styled.div<DialogFooterProps>``;

export default Dialog;

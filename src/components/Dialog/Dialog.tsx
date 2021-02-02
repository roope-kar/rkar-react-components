import React from 'react';
import styled from 'styled-components';
import type { DialogProps, DialogBodyProps, DialogFooterProps } from 'src/components/Dialog/Dialog.d';
import { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Backdrop = styled.div``;

const Container = styled.div.attrs({
  role: 'dialog',
})`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
`;

Container.defaultProps = {
  theme,
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
`;

const Title = styled.h4`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-family: ${(props) => props.theme.font.primary};
  font-weight: normal;
  margin: 0px;
`;

Title.defaultProps = {
  theme,
};

const Close = styled.button`
  color: rgba(255, 255, 255, 0.9);
  font-family: ${(props) => props.theme.font.primary}
  padding: 0;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background: transparent;
  &:focus {
    outline: rgba(0,0,0,0.1);
    background: rgba(0,0,0,0.1);
  }
`;

Close.defaultProps = {
  theme,
};

const Dialog: GroupComponent<DialogProps> = ({ children, title, onClose }: DialogProps) => {
  return (
    <Backdrop>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose}>&times;</Close>
        </Header>
        {children}
      </Container>
    </Backdrop>
  );
};

Dialog.Body = styled.div<DialogBodyProps>`
  padding: 16px 24px;
  padding-top: 24px;
`;

Dialog.Footer = styled.div<DialogFooterProps>`
  padding: 16px 24px;
`;

export default Dialog;

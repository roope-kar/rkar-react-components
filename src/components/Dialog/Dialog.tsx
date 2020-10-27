import React from 'react';
import styled from 'styled-components';
import type { DialogProps, DialogBodyProps, DialogFooterProps } from 'src/components/Dialog/Dialog.d';
import { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Backdrop = styled.div``;

const Container = styled.div.attrs({
  role: 'dialog',
})`
  border: 1px solid ${(props) => props.theme.color['grey-1']};
  border-radius: 4px;
`;

Container.defaultProps = {
  theme,
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const Title = styled.h4`
  font-family: Roboto;
  font-weight: normal;
  margin: 0px;
`;

const Close = styled.button`
  font-family: Roboto;
  padding: 0;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background: transparent;
  &:focus {
    outline: ${(props) => props.theme.color['grey-1']};
    background: ${(props) => props.theme.color['grey-1']};
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
  padding: 6px 12px;
`;

Dialog.Footer = styled.div<DialogFooterProps>`
  padding: 6px 12px;
`;

export default Dialog;

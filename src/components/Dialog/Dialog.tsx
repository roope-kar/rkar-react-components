import React from 'react';
import styled from 'styled-components';
import type { DialogProps, DialogBodyProps, DialogFooterProps } from 'src/components/Dialog/Dialog.d';
import { CloseIcon } from 'src/components';
import { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Backdrop = styled.div``;

const Container = styled.div.attrs({
  role: 'dialog',
})`
  border: 1px solid ${(props) => props.theme.color.default};
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
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
`;

Header.defaultProps = {
  theme,
};

const Title = styled.h4`
  color: ${(props) => props.theme.color.default};
  font-size: 18px;
  font-family: ${(props) => props.theme.font.primary};
  font-weight: normal;
  margin: 0px;
`;

Title.defaultProps = {
  theme,
};

const Close = styled.button`
  color: ${(props) => props.theme.color.default};
  font-family: ${(props) => props.theme.font.primary}
  padding: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 20px;
  background: transparent;
  &:focus {
    outline: ${(props) => props.theme.background.default};
    background: ${(props) => props.theme.background.default};
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
          <Close onClick={onClose}>
            <CloseIcon />
          </Close>
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

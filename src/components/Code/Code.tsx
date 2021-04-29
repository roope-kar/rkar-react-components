import React from 'react';
import styled from 'styled-components';
import type { CodeProps } from 'src/components/Code/Code.d';
import theme from 'src/theme';

const Code = styled.code<CodeProps>`
  display: block;
  font-family: ${(props) => props.theme.font.code};
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  border-radius: 3px;
  padding: 16px 24px;
`;

Code.defaultProps = {
  theme,
};

const If: React.FunctionComponent<CodeProps> = ({ children }: CodeProps) => <span className={'if'}>{children}</span>;

const Fn: React.FunctionComponent<CodeProps> = ({ children }: CodeProps) => <span className={'fn'}>{children}</span>;

const Class: React.FunctionComponent<CodeProps> = ({ children }: CodeProps) => (
  <span className={'class'}>{children}</span>
);

export default Code;

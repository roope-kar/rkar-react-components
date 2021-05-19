import React from 'react';
import styled from 'styled-components';
import type { CodeProps, CodeIfProps, CodeFnProps, CodeClassProps, CodeKeywordProps } from 'src/components/Code/Code.d';
import theme from 'src/theme';

const Container = styled.code<CodeProps>`
  display: block;
  font-family: ${(props) => props.theme.font.code};
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  border-radius: 3px;
  padding: 16px 24px;
`;

Container.defaultProps = {
  theme,
};

const If: React.FunctionComponent<CodeIfProps> = ({ children }: CodeIfProps) => <span className={'if'}>{children}</span>;

const Fn: React.FunctionComponent<CodeFnProps> = ({ children }: CodeFnProps) => <span className={'fn'}>{children}</span>;

const Class: React.FunctionComponent<CodeClassProps> = ({ children }: CodeClassProps) => (
  <span className={'class'}>{children}</span>
);

const Keyword: React.FunctionComponent<CodeKeywordProps> = ({ children }: CodeKeywordProps) => (
  <span className={'keyword'}>{children}</span>
);

const Code: React.FunctionComponent<CodeProps> & {
  If: React.FunctionComponent<CodeIfProps>;
  Fn: React.FunctionComponent<CodeFnProps>;
  Class: React.FunctionComponent<CodeClassProps>;
  Keyword: React.FunctionComponent<CodeKeywordProps>;
} = ({ children }: CodeProps) => {
  return <Container>{children}</Container>;
};

Code.If = If;

Code.Fn = Fn;

Code.Class = Class;

Code.Keyword = Keyword;

export default Code;

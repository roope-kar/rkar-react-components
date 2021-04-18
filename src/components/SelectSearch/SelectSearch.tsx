import React from 'react';
import styled from 'styled-components';
import type { SelectSearchProps, SelectSearchOptionProps } from 'src/components/SelectSearch/SelectSearch.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Container = styled.div`
  color: ${(props) => props.theme.color.default};
  background: ${(props) => props.theme.background.default};
  font-family: ${(props) => props.theme.font.primary};
  position: relative;
  border-radius: 3px;
  overflow: hidden;
`;

Container.defaultProps = {
  theme,
};

const SearchContainer = styled.div`
  height: 100%;
`;

SearchContainer.defaultProps = {
  theme,
};

const SearchInput = styled.input<SelectSearchProps>`
  display: block;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
  width: 100%;
  font-size: 14px;
  background: transparent;
  border: none;
  box-sizing: border-box;
  line-height: 32px;
  padding: 0px 8px;
  &:focus {
    outline: none;
  }
`;

SearchInput.defaultProps = {
  theme,
};

const SelectContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

SelectContainer.defaultProps = {
  theme,
};

const SelectSearch: GroupComponent<SelectSearchProps> = ({ children, ...inputProps }: SelectSearchProps) => {
  return (
    <Container>
      <SearchContainer>
        <SearchInput {...inputProps} type={'text'} role={'searchbox'} />
      </SearchContainer>
      {!!children && <SelectContainer role={'listbox'}>{children}</SelectContainer>}
    </Container>
  );
};

const SearchOption = styled.li<SelectSearchOptionProps>`
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  &:focus {
    outline: 0;
    background: ${(props) => props.theme.background.default};
  }
`;

SearchOption.defaultProps = {
  theme,
};

SelectSearch.Option = function SelectSearchOption({ onClick, value, children }: SelectSearchOptionProps) {
  return (
    <SearchOption onClick={() => onClick(value)} role={'option'} tabIndex={0}>
      {children}
    </SearchOption>
  );
};

export default SelectSearch;

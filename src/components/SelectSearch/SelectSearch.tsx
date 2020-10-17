import React from 'react';
import styled from 'styled-components';
import type { SelectSearchProps, SelectSearchOptionProps } from 'src/components/SelectSearch/SelectSearch.d';
import type { GroupComponent } from 'src/types';

const Container = styled.div``;

const SearchContainer = styled.div``;

const SearchInput = styled.input.attrs({ type: 'text' })``;

const SelectContainer = styled.div``;

const Context = React.createContext<{
  onSelect: (value: unknown) => void;
}>({
  onSelect: () => null,
});

const SelectSearch: GroupComponent<SelectSearchProps> = ({
  children,
  onSearch,
  onSelect,
  placeholder,
}: SelectSearchProps) => {
  const context = { onSelect };
  const handleSearchChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value),
    [],
  );
  return (
    <Context.Provider value={context}>
      <Container>
        <SearchContainer>
          <SearchInput onChange={handleSearchChange} placeholder={placeholder} />
        </SearchContainer>
        <SelectContainer>{children}</SelectContainer>
      </Container>
    </Context.Provider>
  );
};

const SearchOption = styled.button.attrs({ type: 'button' })``;

SelectSearch.Option = function SelectSearchOption({ value, children }: SelectSearchOptionProps) {
  const { onSelect } = React.useContext(Context);
  const handleClick = React.useCallback(() => onSelect(value), []);
  return <SearchOption onClick={handleClick}>{children}</SearchOption>;
};

export default SelectSearch;

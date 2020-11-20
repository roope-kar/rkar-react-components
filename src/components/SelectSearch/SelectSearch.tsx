import React from 'react';
import styled from 'styled-components';
import type { SelectSearchProps, SelectSearchOptionProps } from 'src/components/SelectSearch/SelectSearch.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';
import { useListNavigation } from 'src/hooks';

const Container = styled.div`
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 12px;
`;

Container.defaultProps = {
  theme,
};

const SearchContainer = styled.div`
  height: 100%;
  border: 1px solid ${(props) => props.theme.color.none};
`;

SearchContainer.defaultProps = {
  theme,
};

const SearchInput = styled.input.attrs({ type: 'text', role: 'searchbox' })`
  display: block;
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  background: transparent;
  border: none;
  box-sizing: border-box;
  line-height: 32px;
  padding: 0px 10px;
  &:focus {
    outline: none;
  }
`;

const SelectContainer = styled.ul.attrs({
  role: 'listbox',
  'aria-label': 'Items matching search',
  'aria-activedescendant': '[id of selected item]',
  'aria-expanded': true,
})`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid ${(props) => props.theme.color.none};
  border-top: 0px;
`;

SelectContainer.defaultProps = {
  theme,
};

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
  const ref = React.createRef<HTMLUListElement>();
  useListNavigation(ref);
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
        {!!children && <SelectContainer ref={ref}>{children}</SelectContainer>}
      </Container>
    </Context.Provider>
  );
};

const SearchOption = styled.li.attrs({ role: 'option', 'aria-selected': false, tabIndex: 0 })`
  padding: 5px 10px;
  cursor: pointer;
  &:focus {
    outline: 0;
    background: ${(props) => props.theme.color.none};
  }
`;

SearchOption.defaultProps = {
  theme,
};

SelectSearch.Option = function SelectSearchOption({ value, children }: SelectSearchOptionProps) {
  const { onSelect } = React.useContext(Context);
  const handleClick = React.useCallback(() => onSelect(value), []);
  return <SearchOption onClick={handleClick}>{children}</SearchOption>;
};

export default SelectSearch;

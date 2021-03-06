import React from 'react';
import styled from 'styled-components';
import type { SelectSearchProps, SelectSearchOptionProps } from 'src/components/SelectSearch/SelectSearch.d';
import type { GroupComponent } from 'src/types';
import theme from 'src/theme';
import { useKeyboardNavigation } from 'src/hooks';

const Container = styled.div`
  color: ${(props) => props.theme.color.default};
  position: relative;
  font-family: ${(props) => props.theme.font.primary};
`;

Container.defaultProps = {
  theme,
};

const SearchContainer = styled.div`
  height: 100%;
  background: ${(props) => props.theme.background.default};
`;

SearchContainer.defaultProps = {
  theme,
};

const SearchInput = styled.input.attrs({ type: 'text', role: 'searchbox' })`
  display: block;
  color: ${(props) => props.theme.color.default};
  width: 100%;
  background: transparent;
  border: default;
  box-sizing: border-box;
  line-height: 32px;
  padding: 0px 8px;
  &:focus {
    outline: default;
  }
`;

SearchInput.defaultProps = {
  theme,
};

const SelectContainer = styled.ul.attrs({
  role: 'listbox',
  'aria-label': 'Items matching search',
  'aria-activedescendant': '[id of selected item]',
  'aria-expanded': true,
})`
  margin: 0;
  padding: 0;
  list-style: default;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.default};
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
  useKeyboardNavigation(ref);
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
  padding: 4px 8px;
  cursor: pointer;
  &:focus {
    outline: 0;
    background: ${(props) => props.theme.color.default};
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

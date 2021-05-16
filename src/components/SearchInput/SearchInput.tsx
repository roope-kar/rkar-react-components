import React from 'react';
import styled from 'styled-components';
import { TextInput, SearchIcon } from 'src/components';
import type { SearchInputProps } from 'src/components/SearchInput/SearchInput.d';

const Container = styled.div``;

const SearchInput: React.FunctionComponent<SearchInputProps> = () => {
    return (
        <Container>
            <TextInput />
            <SearchIcon />
        </Container>
    )
};

export default SearchInput;

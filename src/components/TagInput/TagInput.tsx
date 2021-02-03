import React from 'react';
import styled from 'styled-components';
import type { GroupComponent } from 'src/types';
import type { TagInputProps, TagProps } from 'src/components/TagInput/TagInput.d';

const Container = styled.div``;

const TagInput: GroupComponent<TagInputProps> = ({ children, ...inputProps }: TagInputProps) => {
    return (
        <Container>
            {children}
            <input {...inputProps} />
        </Container>
    );
};

TagInput.Tag = styled.button<TagProps>``;

export default TagInput;

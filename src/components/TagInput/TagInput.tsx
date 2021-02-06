import React from 'react';
import styled from 'styled-components';
import type { GroupComponent } from 'src/types';
import type { TagInputProps, TagProps } from 'src/components/TagInput/TagInput.d';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  padding: 0px 8px;
  border: 1px solid transparent;
  line-height: 32px;
  cursor: text;
  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
  & > * {
    margin: 4px;
  }
`;

const Input = styled.input`
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  border: none;
  &:focus {
    outline: none;
  }
`;

const TagInput: GroupComponent<TagInputProps> = ({ children, maxLength = 32, ...inputProps }: TagInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleClick = React.useCallback(() => inputRef.current?.focus(), []);
  return (
    <Container onClick={handleClick}>
      {children}
      <Input {...inputProps} maxLength={maxLength} ref={inputRef} />
    </Container>
  );
};

TagInput.Tag = styled.button<TagProps>`
  border: 1px solid transparent;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
`;

export default TagInput;

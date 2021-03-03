import React from 'react';
import styled from 'styled-components';
import type { GroupComponent } from 'src/types';
import type { TagInputProps, TagProps } from 'src/components/TagInput/TagInput.d';
import theme from 'src/theme';

const Container = styled.div`
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.color.default};
  border-radius: 3px;
  padding: 0px 8px;
  border: 1px solid transparent;
  line-height: 32px;
  cursor: text;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.background.default};
  }
  & > * {
    margin: 4px;
  }
`;

Container.defaultProps = {
  theme,
};

const Input = styled.input`
  background: transparent;
  color: ${(props) => props.theme.color.default};
  border: default;
  &:focus {
    outline: default;
  }
`;

Input.defaultProps = {
  theme,
};

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
  background: ${(props) => props.theme.background.default};
  cursor: pointer;
`;

TagInput.Tag.defaultProps = {
  theme,
};

export default TagInput;

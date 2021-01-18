import React from 'react';
import styled from 'styled-components';
import type { FileInputProps } from 'src/components/FileInput/FileInput.d';
import theme from 'src/theme';

const Container = styled.div`
  min-width: 200px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const Label = styled.label`
  font-family: Roboto;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.color.info};
  text-decoration: underline;
  &:hover {
  }
`;

Label.defaultProps = {
  theme,
};

const Info = styled.div`
  font-size: 12px;
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.9);
`;

const FileInput: React.FunctionComponent<FileInputProps> = ({ label }: FileInputProps) => {
  const [file, setFile] = React.useState<File | null>();
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  }, []);
  return (
    <Container>
      <Input id={label} name={label} type={'file'} onChange={handleChange} />
      <Label htmlFor={label}>{label}</Label>
      {!!file && (
        <Info>
          {file.name} - {(file.size / 1000).toFixed(2)}KB
        </Info>
      )}
    </Container>
  );
};

export default FileInput;

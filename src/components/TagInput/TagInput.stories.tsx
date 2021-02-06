import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TagInput } from 'src/components/TagInput';
import 'src/types';

export default {
  title: 'TagInput',
  component: TagInput,
  parameters: {
    jest: ['TagInput.test.tsx'],
  },
} as Meta;

export const SimpleTagInput: React.FunctionComponent = () => <TagInput value={'123'} />;

export const TagInputWithTags: React.FunctionComponent = () => (
  <TagInput value={'123'} readOnly>
    <TagInput.Tag>alice@domain.com</TagInput.Tag>
    <TagInput.Tag>bob@domain.com</TagInput.Tag>
    <TagInput.Tag>charlie@domain.com</TagInput.Tag>
  </TagInput>
);

export const TagInputWithAddControl: React.FunctionComponent = () => {
  const [tag, setTag] = React.useState<string>('');
  const [tags, setTags] = React.useState<string[]>(['alice@domain.com', 'bob@domain.com', 'charlie@domain.com']);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      setTags([...tags, (event.target as HTMLInputElement).value]);
      setTag('');
    }
  };
  return (
    <TagInput value={tag} onChange={handleChange} onKeyUp={handleKeyUp}>
      {tags.map((tag: string, index: number) => (
        <TagInput.Tag key={`${tag}-${index}`}>{tag}</TagInput.Tag>
      ))}
    </TagInput>
  );
};

export const TagInputWithRemoveControl: React.FunctionComponent = () => {
  const [tags, setTags] = React.useState<string[]>(['alice@domain.com', 'bob@domain.com', 'charlie@domain.com']);
  const handleTagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedTag = (event.target as HTMLButtonElement).value;
    window.console.log('TEST', clickedTag);
    setTags(tags.filter((tag: string) => tag !== clickedTag));
  };
  return (
    <TagInput value={'123'} readOnly>
      {tags.map((tag: string) => (
        <TagInput.Tag key={tag} value={tag} onClick={handleTagClick}>
          {tag}
        </TagInput.Tag>
      ))}
    </TagInput>
  );
};

export const TagInputWithAddAndRemoveControls: React.FunctionComponent = () => {
  const [tag, setTag] = React.useState<string>('');
  const [tags, setTags] = React.useState<string[]>(['alice@domain.com', 'bob@domain.com', 'charlie@domain.com']);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      setTags([...tags, (event.target as HTMLInputElement).value]);
      setTag('');
    }
  };
  const handleTagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedTag = (event.target as HTMLButtonElement).value;
    window.console.log('TEST', clickedTag);
    setTags(tags.filter((tag: string) => tag !== clickedTag));
  };
  return (
    <TagInput value={tag} onChange={handleChange} onKeyUp={handleKeyUp}>
      {tags.map((tag: string, index: number) => (
        <TagInput.Tag key={`${tag}-${index}`} value={tag} onClick={handleTagClick}>
          {tag}
        </TagInput.Tag>
      ))}
    </TagInput>
  );
};

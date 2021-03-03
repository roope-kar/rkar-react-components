import React from 'react';
import styled from 'styled-components';
import { RadioButton } from 'src/components';
import {
  RadioButtonCardProps,
  RadioButtonCardTitleProps,
  RadioButtonCardDescriptionProps,
} from 'src/components/RadioButtonCard/RadioButtonCard.d';
import { GroupComponent } from 'src/types';
import theme from 'src/theme';

const Container = styled.div`
  display: flex;
  padding: 8px 16px;
  flex-flow: nowrap row;
  background: ${(props) => props.theme.background.default};
  border: 1px solid ${(props) => props.theme.background.default};
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.1s linear;
  &:hover {
    background: ${(props) => props.theme.background.default};
  }
`;

Container.defaultProps = {
  theme,
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const InfoContainer = styled.div``;

const RadioButtonCard: GroupComponent<RadioButtonCardProps> = ({ children, value, onClick }: RadioButtonCardProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    !!onClick && onClick(event);
  };
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <Container onClick={handleClick}>
      <InputContainer>
        <RadioButton value={value} readOnly onClick={handleInputClick} />
      </InputContainer>
      <InfoContainer>{children}</InfoContainer>
    </Container>
  );
};

RadioButtonCard.defaultProps = {
  theme,
};

RadioButtonCard.Title = styled.div<RadioButtonCardTitleProps>`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
  margin-bottom: 4px;
`;

RadioButtonCard.Title.defaultProps = {
  theme,
};

RadioButtonCard.Description = styled.div<RadioButtonCardDescriptionProps>`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.default};
  line-height: 22px;
`;

RadioButtonCard.Description.defaultProps = {
  theme,
};

export default RadioButtonCard;

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
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.1s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

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
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
`;

RadioButtonCard.Title.defaultProps = {
  theme,
};

RadioButtonCard.Description = styled.div<RadioButtonCardDescriptionProps>`
  font-family: ${(props) => props.theme.font.primary};
  color: rgba(255, 255, 255, 0.9);
  line-height: 22px;
`;

RadioButtonCard.Description.defaultProps = {
  theme,
};

export default RadioButtonCard;

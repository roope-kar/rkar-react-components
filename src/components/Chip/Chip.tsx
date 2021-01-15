import styled from 'styled-components';
import { ChipProps } from 'src/components/Chip/Chip.d';
import theme from 'src/theme';

const getAppearanceAndIntent = (props: ChipProps): string => {
  const intent = props.intent || 'none';
  if (props.appearance === 'primary') {
    return `
        background: ${props.theme.color[intent]};
        color: rgba(255,255,255,0.9);
      `;
  } else {
    return `
        background: transparent;
        color: ${props.theme.color[intent]};
      `;
  }
};

const Chip = styled.span<ChipProps>`
  padding-left: 6px;
  padding-right: 6px;
  font-size: 12px;
  border-radius: 999px;
  ${getAppearanceAndIntent}
  font-family: Roboto;
`;

Chip.defaultProps = {
  intent: 'none',
  appearance: 'primary',
  theme,
};

export default Chip;

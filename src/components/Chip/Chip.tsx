import styled from 'styled-components';
import { ChipProps } from 'src/components/Chip/Chip.d';
import theme from 'src/theme';

const getAppearanceAndIntent = (props: ChipProps): string => {
  const background = props.theme?.background[props.intent || 'default'];
  const color = props.theme?.color[props.intent || 'default'];
  if (props.appearance === 'primary') {
    return `
        background: ${background};
        color: ${color};
      `;
  } else {
    return `
        background: transparent;
        color: ${color};
      `;
  }
};

const Chip = styled.span<ChipProps>`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  border-radius: 999px;
  ${(props) => getAppearanceAndIntent(props)}
  font-family: ${(props) => props.theme.font.primary};
`;

Chip.defaultProps = {
  intent: 'default',
  appearance: 'primary',
  theme,
};

export default Chip;

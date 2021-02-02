import styled from 'styled-components';
import { ChipProps } from 'src/components/Chip/Chip.d';
import theme from 'src/theme';

const getAppearanceAndIntent = (props: ChipProps): string => {
  const intent = props.intent || 'none';
  const color = (props.theme && props.theme.color[intent]) || '';
  if (props.appearance === 'primary') {
    return `
        background: ${color};
        color: rgba(255,255,255,0.9);
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
  font-family: Roboto;
`;

Chip.defaultProps = {
  intent: 'none',
  appearance: 'primary',
  theme,
};

export default Chip;

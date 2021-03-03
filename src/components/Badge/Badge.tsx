import styled from 'styled-components';
import { lighten, darken } from 'polished';
import type { BadgeProps } from 'src/components/Badge/Badge.d';
import theme from 'src/theme';

const getIntent = (props: BadgeProps): string => {
  const color = props.theme?.color[props.intent] || '';
  if (props.intent === 'default') {
    return `
            color: ${props.theme?.color.default};
            background: ${props.theme?.background.default};
        `;
  } else {
    return `
            color: ${darken(0.2, color)};
            background: ${lighten(0.4, color)};
        `;
  }
};

const Badge = styled.span<BadgeProps>`
  padding: 0px 8px;
  border-radius: 3px;
  font-size: 12px;
  display: inline-block;
  line-height: 16px;
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => getIntent(props)};
`;

Badge.defaultProps = {
  intent: 'default',
  theme,
};

export default Badge;

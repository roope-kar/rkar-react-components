import styled from 'styled-components';
import { lighten } from 'polished';
import type { BadgeProps } from 'src/components/Badge/Badge.d';
import theme from 'src/theme';

const getIntent = (props: BadgeProps): string => {
  const color = (props.theme && props.theme.color[props.intent]) || '';
  if (props.intent === 'none') {
    return `
            color: rgba(0,0,0,0.6);
            background: rgba(255,255,255,0.9);
        `;
  } else {
    return `
            color: ${color};
            background: ${lighten(0.4, color)};
        `;
  }
};

const Badge = styled.span<BadgeProps>`
  padding: 0px 6px;
  border-radius: 2px;
  font-size: 12px;
  display: inline-block;
  line-height: 16px;
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => getIntent(props)};
`;

Badge.defaultProps = {
  intent: 'none',
  theme,
};

export default Badge;

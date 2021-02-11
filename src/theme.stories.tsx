import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import theme from 'src/theme';

export default {
  title: 'Default Theming',
} as Meta;

const colorContainer = {
  display: 'flex',
  flexFlow: 'nowrap row',
  alignItems: 'center',
  marginBottom: '24px',
};

const colorBlock = {
  borderRadius: '3px',
  width: '36px',
  height: '36px',
  marginRight: '8px',
};

const textBlock = {
  fontSize: '24px',
  color: 'rgba(255, 255, 255, 0.9)',
  height: '36px',
  borderRadius: '3px',
  background: 'rgba(0, 0, 0, 0.1)',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
};

export const DefaultThemeColors: React.FunctionComponent = () => {
  return (
    <div>
      <div style={colorContainer}>
        <div style={{ ...colorBlock, background: theme.color.none }}></div>
        <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: theme.font.primary, fontSize: '16px' }}>
          Default
        </div>
      </div>
      <div style={colorContainer}>
        <div style={{ ...colorBlock, background: theme.color.info }}></div>
        <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: theme.font.primary, fontSize: '16px' }}>Info</div>
      </div>
      <div style={colorContainer}>
        <div style={{ ...colorBlock, background: theme.color.success }}></div>
        <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: theme.font.primary, fontSize: '16px' }}>
          Success
        </div>
      </div>
      <div style={colorContainer}>
        <div style={{ ...colorBlock, background: theme.color.warning }}></div>
        <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: theme.font.primary, fontSize: '16px' }}>
          Warning
        </div>
      </div>
      <div style={colorContainer}>
        <div style={{ ...colorBlock, background: theme.color.danger }}></div>
        <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: theme.font.primary, fontSize: '16px' }}>
          Danger
        </div>
      </div>
    </div>
  );
};

export const DefaultThemeFonts: React.FunctionComponent = () => {
  return (
    <div>
      <div style={{ ...textBlock, fontFamily: theme.font.primary }}>Primary text</div>
      <div style={{ ...textBlock, fontFamily: theme.font.secondary }}>Secondary text</div>
      <div style={{ ...textBlock, fontFamily: theme.font.code }}>Monospaced text</div>
    </div>
  );
};

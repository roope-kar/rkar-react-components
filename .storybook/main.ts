import path from 'path';
import { themes } from '@storybook/theming';

module.exports = {
  addons: ['@storybook/addon-jest', {
    name: '@storybook/addon-essentials', options: {
      docs: {
        theme: themes.dark,
      },
  } }, '@storybook/addon-a11y'],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules = [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'prettier-loader',
          options: {
            resolveConfigOptions: {
              editorConfig: true,
              config: '.prettierrc'
            }
          }
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ];
    config.resolve = {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        src: path.resolve(__dirname, '..', 'src'),
        components: path.resolve(__dirname, '..', 'src', 'components')
      }
    }
    return config;
  }
}

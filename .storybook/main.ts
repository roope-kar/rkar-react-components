const path = require('path');

module.exports = {
  addons: ['@storybook/addon-jest'],
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

const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ['resolve-url-loader']
    });

    // fonts
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      ]
    });

    config.resolve.alias.src = path.resolve(__dirname, '..', 'src');

    return config;
  }
}

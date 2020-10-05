const path = require('path');

module.exports = {
    stories: ['../lib/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '..', 'lib', 'components'),
        });
        config.resolve.alias.lib = path.resolve(__dirname, '..', 'lib');
        return config;
    }
}

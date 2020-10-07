const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.resolve.alias.src = path.resolve(__dirname, '..', 'src');
    return config;
  }
}

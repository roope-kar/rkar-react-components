module.exports = {
    stories: ['../lib/**/*.story.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../lib'),
        });
        return config;
    }
}

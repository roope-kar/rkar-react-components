const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src', 'components')
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'rkar',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        rkar-react-components
        @version: ${pkg.version} | ${new Date().toDateString()}
        @author: ${pkg.author}
        @license: ${pkg.license}
      `,
      entryOnly: true
    })
  ]
};

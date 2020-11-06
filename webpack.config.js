const path = require('path');

module.exports = {
  entry: './src/components/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
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
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_',
    },
  },
};

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
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
        // https://webpack.js.org/loaders/eslint-loader/#noemitonerrorsplugin
        // "Gotchas: NoEmitOnErrorsPlugin is now automatically enabled in webpack 4, when mode
        //  is either unset, or set to production. So even ESLint warnings will fail the build.
        //  No matter what error settings are used for eslint-loader, except if emitWarning enabled."
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,

          // These two flags together allow local dev site to reload
          // even in case there are eslint errors.
          emitWarning: true,
          failOnError: false,
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src')
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'bundle.js',
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

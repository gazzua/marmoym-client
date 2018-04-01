const path = require('path');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, '..', '..', 'src');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/app.jsx',
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'react-hot-loader/webpack',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        exclude: [/node_modules/],
        test: /\.tsx?$/,
        use: [
          {
            loader: 'react-hot-loader/webpack',
          },
          {
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]-[local]-[hash:base64:4]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  node: {
    __dirname: true,
    __filename: true,
    fs: 'empty',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', '..', 'dist', 'bundle'),
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'PLATFORM': '"MOBILE"',
      },
    }),
  ],
  resolve: {
    alias: {
      '@actions': path.resolve(SRC_PATH, 'state', 'actions'),
      '@components': path.resolve(SRC_PATH, 'components'),
      '@constants': path.resolve(SRC_PATH, 'constants'),
      '@containers': path.resolve(SRC_PATH, 'containers'),
      '@models': path.resolve(SRC_PATH, 'models'),
      '@selectors': path.resolve(SRC_PATH, 'state', 'selectors'),
      '@src': path.resolve(SRC_PATH),
      '@styles': path.resolve(SRC_PATH, 'styles'),
      '@types': path.resolve(SRC_PATH, 'types'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve('./node_modules'),
    ],
  },
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: [
    "babel-polyfill",
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/app.tsx'
  ],
  resolve: {
    modules: [
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve('./src'),
      '@components': path.resolve('./src', 'components'),
      '@actions': path.resolve('./src', 'store', 'actions'),
      '@selectors': path.resolve('./src', 'store', 'selectors'),
      '@styles': path.resolve('./src', 'styles'),
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '..', '..', 'dist', 'bundle'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'PLATFORM': '"MOBILE"'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'react-hot-loader/webpack'
          },
          {
            loader: 'babel-loader',
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'react-hot-loader/webpack'
          },
          {
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader',
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },  
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:4]'
            } 
          },
          {
            loader: "sass-loader"
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ],
      }
    ]
  },
};
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    // mainFields: ['main']
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
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         query: {
      //           modules: true,
      //           sourceMap: true,
      //           importLoaders: 1,
      //           localIdentName: '[local]__[hash:base64:5]'
      //         }
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         // options: {
      //         //   plugins: [
      //         //     require('postcss-import')({ addDependencyTo: webpack }),
      //         //     require('postcss-url')(),
      //         //     require('postcss-cssnext')(),
      //         //     require('postcss-reporter')(),
      //         //     require('postcss-browser-reporter')({ disabled: isProduction }),
      //         //   ]
      //         // }
      //       }
      //     ]
      //   })
      // },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[name]-[local]-[hash:base64:4]'
          }
        }
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
          }
        ],
      }
    ]
  },
};
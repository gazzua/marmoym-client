var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    './src/app.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve('dist', 'bundle')
    // publicPath: path.resolve('dist')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", '.jsx']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
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
        // include: path.resolve(__dirname, '..', '..', 'src')
      }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

module.exports = config;
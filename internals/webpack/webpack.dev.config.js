var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/app.js'
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
  devtool: 'cheap-module-eval-source-map',
  // resolve: {
  //   extensions: [".ts", ".tsx", ".js", '.jsx']
  // },
  module: {
    // preLoaders: [
    //   test: /\.js$/,
    //   use: 'source-map-loader'
    // ],
    loaders: [
      // {
      //   test: [/\.ts?$/, /\.tsx?$/],
      //   use: ["react-hot-loader/webpack", "awesome-typescript-loader"]
      // },
      // { 
      //   enforce: "pre", 
      //   test: /\.js$/, 
      //   use: ["source-map-loader", "babel-loader"],
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.js$/,
      //   use: ['react-hot-loader/webpack', 'babel-loader'],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.js$/,
        use: 'babel-loader',
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
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }]
  }
};

//================================ prod=========================

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var PORT = process.env.PORT || 3333
var PRODUCTION = process.env.NODE_ENV === 'production'
var SRC_DIR = path.resolve(__dirname, './src')
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')

var config = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
	  loaders: [{
	      test: /\.js$/,
	      loaders: ['react-hot', 'babel'],
	      include: path.join(__dirname, 'src')
	    },
	    { test: /\.css$/, loader: "style-loader!css-loader" }]
  }
}

if (!PRODUCTION) {
  config.devtool = 'eval'
}

module.exports = config
*/
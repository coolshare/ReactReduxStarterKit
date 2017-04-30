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
    new HtmlWebpackPlugin({ template: './index.html', inject:false })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: SRC_DIR
      },{ test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}

if (!PRODUCTION) {
  config.devtool = 'eval'
}

module.exports = config
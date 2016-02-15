var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: [
      // 'webpack-dev-server/client?http://localhost:' + port,
      // 'webpack/hot/only-dev-server',
      './app/app.jsx'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app', 'styles'),
        loader: 'style!css!sass'
      }
    ]
  }
};
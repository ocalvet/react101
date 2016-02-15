var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: "./app/app.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              include: path.join(__dirname, 'app'),
              loader: 'babel-loader',
              query:
              {
                presets:['es2015', 'stage-0', 'react']
              }
            },
            {
              test: /\.scss$/,
              include: path.join(__dirname, 'app', 'styles'),
              loader: 'style!css!sass'
            }
        ]
    },
    devServer: {
      port: 8090,
      color: true,
      progress: true
    }
}
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
              exclude: /node_modules/,
              loader: 'babel-loader',
              query:
              {
                presets:['es2015', 'stage-0', 'react']
              }
            }
        ]
    },
    devServer: {
      port: 8090,
      color: true,
      progress: true
    }
}
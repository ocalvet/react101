var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
    // publicPath: config.output.publicPath,
    // hot: true,
    historyApiFallback: true,
    colors: true,
    progress: true
}).listen(8090);
/**
 * Created by Simple on 2017/3/6.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var bundler = webpack(config);

console.log(bundler);

new WebpackDevServer(bundler).listen(8000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:8000/');
});
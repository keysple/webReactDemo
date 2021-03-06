/**
 * Created by Simple on 2017/3/6.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    inline:true,
    historyApiFallback:true
}).listen(8000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:8000/');
});
/**
 * Created by Simple on 2017/3/6.
 */
'use strict';
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    filename: 'common.js'   /*共用代码打包*/
});
let path = require('path');

        module.exports = {
            devtool: 'eval',
            entry: [
        'webpack-dev-server/client?http://localhost:8000',   /*inline mode */
        'webpack/hot/only-dev-server',   /*热部署*/
        path.resolve(__dirname, './src/js/entry.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
       publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // commonsPlugin
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/,

            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.json', '.less'
        ]
    }
};
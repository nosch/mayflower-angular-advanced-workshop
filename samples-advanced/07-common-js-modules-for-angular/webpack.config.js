'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourceDir = path.resolve(__dirname, './src');
var outputDir = path.resolve(__dirname, './build');
var vendorEntry = ['angular'];
var appEntry = [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/dev-server',
    sourceDir + '/index'
];

var config = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: appEntry,
        vendor: vendorEntry
    },

    output: {
        path: outputDir,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.css']
    },

    module: {
        loaders: [{
            test: /\.js$/, // matches all *.js and *.jsx files
            loaders: ['ng-annotate', 'babel'],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            )
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                dead_code: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new HtmlWebpackPlugin({
            title: 'Webpack Project Starter',
            favicon: sourceDir + '/images/favicon.ico',
            template: sourceDir + '/html/index.tpl.html',
            inject: true
        })
    ]
};

module.exports = config;

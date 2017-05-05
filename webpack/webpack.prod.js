var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./index.tsx'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static'),
        publicPath: '/'
    },
    module: { 
        loaders:[{
            test: /\.tsx?$/,
            loaders: ['ts-loader']
        }, {
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    }
};
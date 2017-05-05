var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var commonEntry = ['react-hot-loader/patch', 'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr'];

module.exports = {
    entry: {
        'index': commonEntry.concat(['./index.tsx'])
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static'),
        publicPath: '/'
    },
    module: { 
        loaders:[{
            test: /\.tsx?$/,
            loaders: ['react-hot-loader/webpack', 'ts-loader']
        }, {
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.html$/,
            loader: ['html-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },
    devtool: 'sourcemap'    
};
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: [
                'react-hot-loader/webpack',
                'awesome-typescript-loader'
            ],
            exclude: path.resolve(__dirname, 'node_modules'),
            include: path.resolve(__dirname, 'src')
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    devServer: {
        hot: true
    }
};
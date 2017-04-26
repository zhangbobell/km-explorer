const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors

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
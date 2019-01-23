const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig={
    title: 'Fine-React',
    template: './index.html'
};
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname) + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    devtool: 'inline-source-map',

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: path.resolve(__dirname, 'node_modules'),
        }, {
            test: /\.(js|jsx)$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: ['babel-loader', 'eslint-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig) 
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 9006,
        hot: true,
	    open:true
    }
};
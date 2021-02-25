const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        clientLogLevel: 'silent',
        port: 3000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css'
        })
    ]
});
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const webpackConfig = require('./common');

module.exports = {
    ...webpackConfig,
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'initial'
        },
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '..', '..', 'assets', 'bundle'),
        publicPath: '/assets/bundle'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.join(__dirname, '..', '..', 'assets', 'json'),
            includeAllFileTypes: false
        })
    ]
};

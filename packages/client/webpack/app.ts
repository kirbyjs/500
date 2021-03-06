import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpackConfig from './common';

const plugins: webpack.Plugin[] = webpackConfig.plugins || [];

const config: webpack.Configuration = {
    ...webpackConfig,
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'initial'
        },
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '..', 'assets', 'bundle'),
        publicPath: '/'
    },
    plugins: [
        ...plugins,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
};

export default config;

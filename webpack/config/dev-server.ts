import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpackConfig from './common';

const source: string = path.resolve(__dirname, '..', '..', 'src');
const plugins: webpack.Plugin[] = webpackConfig.plugins || [];

const config: webpack.Configuration = {
    ...webpackConfig,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: [source],
        watchContentBase: true,
        open: true,
        port: 9020
    },
    entry: './scripts/local/start-dev-server',
    plugins: [
        ...plugins,
        new HtmlWebpackPlugin({
            template: path.resolve(source, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        ...webpackConfig.resolve,
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
};

export default config;

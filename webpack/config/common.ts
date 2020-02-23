import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { GenerateSW, GenerateSWOptions } from 'workbox-webpack-plugin';

interface GenerateSWOptionsV5 extends GenerateSWOptions {
    additionalManifestEntries: { url: string; revision: string | null }[];
}

const isProduction: boolean = process.env.NODE_ENV === 'production';
const scssCommonLoaders: webpack.Loader[] = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: !isProduction,
            reloadAll: !isProduction
        }
    },
    {
        loader: 'css-loader',
        options: {
            sourceMap: !isProduction
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: [autoprefixer()]
        }
    },
    {
        loader: 'sass-loader',
        options: { sourceMap: !isProduction }
    }
];

const swOptions: GenerateSWOptionsV5 = {
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
    additionalManifestEntries: [
        {
            url: '/index.html',
            revision: null
        },
        {
            url: '/manifest.json',
            revision: null
        },
        {
            url: '/favicon.ico',
            revision: null
        }
    ]
};

const config: webpack.Configuration = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jp2|webp|pdf|png|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]'
                    }
                }]
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: isProduction ? [] : ['react-hot-loader/babel']
                    }
                }
            },
            {
                test: /\.scss/,
                use: scssCommonLoaders
            }
        ]
    },
    plugins: [
        new GenerateSW(swOptions),
        new CopyPlugin([{
            from: path.resolve(__dirname, '..', '..', 'assets', 'public')
        }])
    ]
};

export default config;

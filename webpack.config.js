const JsConfigWebpackPlugin = require('js-config-webpack-plugin')
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    entry: {
        main: path.join(__dirname, './src/client/js/index.js')
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jpeg/i,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new AssetsPlugin({ filename: 'assets.json', path: './dist' }),
        new JsConfigWebpackPlugin(),
        new ScssConfigWebpackPlugin(),
    ],
    optimization: {
        moduleIds: "hashed"
    }
}
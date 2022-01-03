const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash:8].js",
        chunkFilename: "[name].[contenthash:8].js"
    },
    module: {
        rules: [
            {
                test: /.css$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /.less$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'learn-webpack',
            template: "./public/index.html"
        }),
        new miniCssExtractPlugin()
    ],
    devServer: {
        hot: true
    }
}
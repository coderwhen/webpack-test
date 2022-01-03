const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].[contenthash:8].js",
        chunkFilename: "js/[name].[contenthash:8].js"
    },
    module: {
        rules: [
            {
                test: /.css$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /.less$/i,
                use: [
                    miniCssExtractPlugin.loader,
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
        new miniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        })
    ],
    devServer: {
        hot: true
    }
}
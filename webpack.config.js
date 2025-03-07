const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './app.js', // Основной entry point для app.js
        giftCards: './giftCards.js', // Отдельный entry point для giftCards.js
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js', // Имена выходных файлов: app.bundle.js и giftCards.bundle.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Обработка CSS
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['app'], // Подключаем только app.bundle.js
        }),
        new HtmlWebpackPlugin({
            template: './gifts.html',
            filename: 'gifts.html',
            chunks: ['app', 'giftCards'], // Подключаем app.bundle.js и giftCards.bundle.js
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9001,
        open: {
            app: {
                name: 'google-chrome', // Или 'firefox', 'edge' и т.д.
            },
        },
        hot: true,
    },
    devtool: 'inline-source-map',
};
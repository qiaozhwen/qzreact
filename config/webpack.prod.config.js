const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname, '-------------')
module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js",
        publicPath:"/"
    },
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
                options: {
                    esModule: false, // 这里设置为false
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "QZ REACT",
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], //后缀名自动补全
    }
};
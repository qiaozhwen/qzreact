const path = require('path');
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        //loaders加载器
        rules:  [
            {
                test:  /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    devServer: {
        port: 8080
    }
};
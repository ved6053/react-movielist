path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({

    template: './src/index.html',
    filename: './index.html',
});
module.exports = {
    devServer: {
        contentBase: __dirname + "/public/",
        inline: true,
        host: 'localhost',
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
               use: ['babel-loader', 'eslint-loader']
                
            },
            {
                test: /\.(png|jpg)$/i,
                exclude: /node_modules/,
                loader: 'url-loader?limit=5000',
            },
            {
                test: /\.json?$/,
                loader: 'json'
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }
        ],
    },
    output: {
        path: __dirname + "/public",
        chunkFilename: '[name].js'
    },
    plugins: [htmlPlugin],
};
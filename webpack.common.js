const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    
    stats: {
        children: false,
        modules: false
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            tempate:"./src/index.pug",
            title: 'Development',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port:3001,
    },
    output: {
      filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.pug$/,
                use: 'pug-loader'
            }
        ]
    },
  };
var path = require('path');

var config = {
    context : __dirname,
    entry: './src/ui-app/main.js',
    output: {
       path: path.resolve(__dirname,'dist'),
       filename: 'bundle.js',
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
        rules: [
          {
             test: /\.js?$/,
             exclude: /node_modules/,
             use:{
                loader: 'babel-loader'
             }
          }
       ]
    }
 }
 module.exports = config;
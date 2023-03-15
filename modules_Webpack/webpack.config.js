// В синтаксисе config.js есть '[]'. В документации
// вижу их в разных свойства. Пример "..: '[id].js'," || " ..: '[name].css'". 
// Какое у них предназначение? 
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      minify: false,

      filename: 'main.html',
      template: path.resolve(__dirname, './src/html/index.html'),
      title: 'firstApp_Webpack',

    }),
    new MiniCssExtractPlugin(
      { filename: "./css/main.css" }
    )]
}
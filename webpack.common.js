const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './src/js/script.js',
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),

    new HtmlWebpackPlugin({ 
      filename: "index.html",
      template: "./src/public/index.html", 
    }),
    new HtmlWebpackPlugin({ 
      filename: "destination.html",
      template: "./src/public/destination.html", 
    }),
    new HtmlWebpackPlugin({ 
      filename: "crew.html",
      template: "./src/public/crew.html", 
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpg|png|webp)/,
        type: "asset/resource",
      },
    ],
  },
};
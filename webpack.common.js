const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './src/js/index.js',
    destination: '/src/js/destination.js',
    crew: '/src/js/crew.js',
    technology: '/src/js/technology.js',
  },
  
  optimization: {
    splitChunks: {
        chunks: 'all'
    }
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),

    new HtmlWebpackPlugin({ 
      filename: "index.html",
      template: "./src/public/index.html",
      chunks: ["index"], 
    }),
    new HtmlWebpackPlugin({ 
      filename: "destination.html",
      template: "./src/public/destination.html", 
      chunks: ['destination']
    }),
    new HtmlWebpackPlugin({ 
      filename: "crew.html",
      template: "./src/public/crew.html", 
      chunks: ["crew"],
    }),
    new HtmlWebpackPlugin({ 
      filename: "technology.html",
      template: "./src/public/technology.html",
      chunks: ['technology'],
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
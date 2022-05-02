const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    fallback: {
      'path': false,
      'url': false,
    }
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [
          'template-string-optimize-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};

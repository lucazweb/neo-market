const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { ContextReplacementPlugin } = require('webpack')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          // {
          //   loader: 'file-loader',
          // },
          {
            loader: 'url-loader',
            options: {
              exclude: '/node_modules',
              limit: 25000, //asset size limit in byte
              name: '[name].[ext]',
              outputPath: 'assets/'
            },
          }
        ],
        type: "javascript/auto"
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /\node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.jpg', '.png'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
}

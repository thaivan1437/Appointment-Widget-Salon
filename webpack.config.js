const path = require('path');
const argv = require('yargs').argv;
const JS_JSX_PATTERN = /\.jsx?$/;
const CSS_PATTERN = /\.css$/i;
const URL_LOADER_PATTERN = /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/;
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = argv.buildEnv || 'development';

module.exports = {
  entry: {
    widgets: 'index.js',
    'sm-loader': 'sm-loader.js',
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@environment': path.resolve(
        __dirname,
        'src',
        'environments',
        process.env.NODE_ENV + '.js'
      ),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: JS_JSX_PATTERN,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: CSS_PATTERN,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: URL_LOADER_PATTERN,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
      inject: false,
    }),
  ],
  devServer: {
    port: 5555,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/order
const argv = require('yargs').argv;

const JS_JSX_PATTERN = /\.jsx?$/;
const CSS_PATTERN = /\.css$/i;
const URL_LOADER_PATTERN = /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/;
const isLocal = argv.buildEnv === 'local';

process.env.NODE_ENV = isLocal ? 'development' : argv.buildEnv || 'development';

const version = require('./package.json').version;

module.exports = {
  entry: {
    widgets: 'index.js',
    loader: 'loader.js',
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
  output: {
    path: path.resolve('build', version),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@environment': path.resolve(
        __dirname,
        'src',
        'environments',
        isLocal ? 'local.js' : `${process.env.NODE_ENV}.js`
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

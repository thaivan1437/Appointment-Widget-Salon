const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const version = require('./package.json').version;

const JS_JSX_PATTERN = /\.(js|jsx|ts|tsx)$/;
const CSS_PATTERN = /\.css$/i;
const URL_LOADER_PATTERN = /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/;

const isProd = process.env.NODE_ENV === 'production';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'eval-cheap-module-source-map' : 'source-map',
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
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      alias: {
        '@common': path.resolve(__dirname, 'src', 'common'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@environment': path.resolve(
          __dirname,
          'src',
          'environments',
          `.env.${env.config}.js`
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
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
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
};

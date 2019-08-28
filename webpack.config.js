const path = require('path');
const argv = require('yargs').argv;
const JS_JSX_PATTERN = /\.jsx?$/;
const CSS_PATTERN = /\.css$/i;
const IMG_PATTERN = /\.(png|jpg|gif|svg)$/i;
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = argv.buildEnv || 'development';

module.exports = {
  entry: {
    appointment: './src/widgets/appointment.jsx',
    pricing: './src/widgets/pricing.jsx',
    'special-offer': './src/widgets/special-offer.jsx',
  },
  output: {
    path: path.resolve('dist'),
    filename: 'widget_[name]_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
    },
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
        test: IMG_PATTERN,
        use: [
          {
            loader: 'url-loader',
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

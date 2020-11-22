const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withSourceMaps = require('@zeit/next-source-maps')();
const developmentExtension = require('./src/environments/development');
const productionExtension = require('./src/environments/production');

const isDev = process.env.PUBLIC_NEXT_ENV === 'development' || process.env.PUBLIC_NEXT_ENV === 'local';
let isConfig = ''
if (isDev)  {
  isConfig = developmentExtension
}

if (!isDev)  {
  isConfig = productionExtension
}

module.exports = withSourceMaps(withCss(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  env: {
    PUBLIC_NEXT_ENV: process.env.PUBLIC_NEXT_ENV
  },
  webpack: (config) => {
    config.plugins.push(
      new MiniCssExtractPlugin({
        ignoreOrder: true // Enable to remove warnings about conflicting order
      })
    );
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    )
    return config;
  },
  publicRuntimeConfig: {
    ...isConfig,
    env: process.env.PUBLIC_NEXT_ENV
  }
})))

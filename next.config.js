const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

module.exports = withCss(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
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
  }
}))

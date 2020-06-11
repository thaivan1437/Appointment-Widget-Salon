
const path = require('path');
const argv = require('yargs').argv;
const HWP = require('html-webpack-plugin');

process.env.NODE_ENV = argv.buildEnv || 'development';

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/build')
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|woff)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    },
                ]
            },
        ],
    },
    devServer: {
        port: 8080,
        publicPath: '/',
        historyApiFallback: true
    },
    plugins: [
        new HWP(
            {
                template: path.join(__dirname, '/public/index.html'),
                favicon: 'public/favicon.ico'
            }
        )
    ]
}

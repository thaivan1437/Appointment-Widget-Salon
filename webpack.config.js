
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
    plugins: [
        new HWP(
            {
                template: path.join(__dirname, '/public/index.html'),
                favicon: 'public/favicon.ico'
            }

        )
    ]
}

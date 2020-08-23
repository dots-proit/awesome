const path = require('path');
const html = require('html-webpack-plugin');
const copy = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new html({
            template: './src/index.html'
        }),
        new copy({
            patterns: [
                {
                    from: 'public',
                    to: '.'
                }
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        ]
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/, to: '/'
                },
            ],
        },
        contentBase: false,
        compress: true,
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: '/',
        watchOptions: {
            poll: false,
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
};

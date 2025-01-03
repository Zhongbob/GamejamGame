const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        // Automatically inject the bundle.js into index.html
        new HtmlWebpackPlugin({
            template: './public/index.html', // Use the `index.html` from `/public`
        }),
        // Copy everything from the `/public` folder except index.html
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: '.', filter: async (resourcePath) => !resourcePath.endsWith('index.html') },
            ],
        }),
    ],
};

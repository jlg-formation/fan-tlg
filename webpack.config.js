const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: './app/main.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './app/wpk')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: path.resolve(__dirname, './tsconfig.json')
                }
            }]
        }]
    },
    devtool: 'source-map',
    plugins: [
		
	]
};

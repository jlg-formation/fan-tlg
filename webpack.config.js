const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                    loader: 'ng-annotate-loader',
                }, {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: path.resolve(__dirname, './tsconfig.json')
                    }
                } ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize&sourceMap'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
                })
            },
            {
				test: /\.html$/,
				use: [{
					loader: 'ngtemplate-loader',
					options: {
						relativeTo: 'app'
					}
				}, {
					loader: 'html-loader'					
				}]
			},
            {
				test: /\.png$/,
				use: {
					loader: 'file-loader',
                    options: {
						name: '[path][name].[ext]',
						publicPath: 'wpk/',
                        useRelativePath: true,
					}
				}
			},
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/index.js',
        //components: './src/components.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    devServer: {
        watchFiles: ['./src/*.pug'],
        hot: true,
        open: true,
        static: {
            directory: './src',
            watch: true
        },
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
        })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pug/pages/index.pug",
        }),
        new HtmlWebpackPlugin({
            filename: "pages/services.html",
            template: "./src/pug/pages/services.pug",
        }),
        new HtmlWebpackPlugin({
            filename: "pages/interior-design.html",
            template: "./src/pug/pages/interior-design.pug",
        }),
        new HtmlWebpackPlugin({
            filename: "pages/our-work.html",
            template: "./src/pug/pages/our-work.pug",
        }),
        new HtmlWebpackPlugin({
            filename: "pages/project1.html",
            template: "./src/pug/pages/project1.pug",
        })],
    module: {
        rules: [
            {
            test: /\.html$/i,
            loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                     options: {
                         presets: ['@babel/preset-env'],
                         cacheDirectory: true,
                     }
                }
            },
        ]
    },
}
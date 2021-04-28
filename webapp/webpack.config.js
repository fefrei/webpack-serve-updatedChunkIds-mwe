const path = require('path');

module.exports = (env, args) => ({
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "app.js",
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.s?css?$/,
                use: [
                    'style-loader', // Creates `style` nodes from JS strings
                    'css-loader', // Translates CSS into CommonJS
                    'sass-loader' // Compiles Sass to CSS
                ]
            }
        ]
    },
    plugins: [
    ],
    devtool: args.mode === 'production' ? false : "source-map",
    devServer: {
        hot: true,
        contentBase: './dist'
    },
    performance: {
        hints: false
    }
})

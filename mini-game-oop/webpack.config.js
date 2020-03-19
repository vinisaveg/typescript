const path = require('path')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}
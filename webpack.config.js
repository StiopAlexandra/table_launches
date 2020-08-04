const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})],
    devServer:{
        contentBase: './dist'
    }
};
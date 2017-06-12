var path = require('path');
module.exports = {
    entry :  './index.js',
    output : {
        filename : '[name].js',
        path : __dirname + '/dist/js'
    },
    module : {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            {test: /.css$/, use: ['style-loader', 'css-loader']},/*解析css, 并把css添加到html的style标签里*/
            //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
            {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src') // New
    }
};
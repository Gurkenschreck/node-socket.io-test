var webpack = require('webpack');
var path = require('path');

var conf = {
    entry: [
        path.join(__dirname, 'marked.bundle.js')
    ],
    output: {
        filename: 'marked.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = conf;
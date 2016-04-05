/**
 * Created by lizilin on 16/4/5.
 */
var webpack = require('webpack');

var path = require('path')

var srcPath = path.join(__dirname,"src")

module.exports = {
    entry : {
        module : path.join(srcPath,"entry.js"),
        common : ["jquery"]
    },
    output : {
        filename : "bundle.min.js",
        path     : path.join(srcPath,"build")
    },
    module : {
        loaders : [
            {test : /\.js$/,loader:"babel",exclude : /node_modules/}
        ]
    },
    devServer : {
        port : 3003,
        contentBase : "./build"
    },

    plugins : [
        new webpack.optimize.CommonsChunkPlugin("common","plugins.min.js")
    ]
}
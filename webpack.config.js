//var debug = process.env.NODE_ENV !== "production";
//var webpack = require('webpack');

module.exports = {
    mode: "development",
    context: __dirname,
    devtool: "inline-sourcemap",
    entry: "./src/bin-mask.js",
    output: {
        path: __dirname,
        filename: "bin-mask.min.js"
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: "html-loader"
        }, {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};

module.exports = {
    entry: "./app/App.jsx",
    output: {
        filename: "public/javascripts/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
}
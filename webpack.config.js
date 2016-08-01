var webpack=require("webpack");
module.exports = {
  entry:'./app.js',
  output:{
    filename:'./Scrapy/dist.js'
  },
  module: {
  loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    except: ['$super', '$', 'exports', 'require']
                },
                compress: {
                   drop_console:false
                 }

            })
    ]
}

var path = require("path");
var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));


module.exports = {
  entry: './src/index',
  output: {
      path: path.resolve(__dirname, "public/assets/"),
      publicPath: "/assets/",
      filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.jsx', '.json', '.coffee']
     }
};

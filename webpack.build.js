var webpack = require('webpack');

module.exports = {
  entry: [
    __dirname + '/index.js',
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.jsx?$/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    __dirname + '/index.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: '/',
    publicPath: 'http://localhost:3788/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
  },
  target: 'web'
}
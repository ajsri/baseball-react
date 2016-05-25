var express = require('express');
var webpack = require('webpack');

var config = require('./webpack.config.js');
var compiler = webpack(config);

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname));
app.listen(3788, function() {
  console.log("Listening on " + 3788);
})
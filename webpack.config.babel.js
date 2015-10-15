var HtmlwebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    path = require('path');

var TARGET = process.env.npm_lifecycle_event,
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

var common = {
  entry : APP_PATH,
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  output : {
    path : BUILD_PATH,
    filename : 'bundle.js'
  },
  devServer : {
    historyApiFallback : true,
    port : 3000,
    hot : true,
    inline : true,
    progress : true
  },
  module : {
    loaders : [{
      test : /\.css$/,
      loaders : ['style','css'],
      include : APP_PATH
    }, {
      test : /\.jsx?$/,
      loaders : ['babel'],
      include : APP_PATH
    }]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({ title : 'WebPack Starter'})
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool : 'eval-source-map',
    devServer : {
      historyApiFallback : true,
      hot : true,
      inline : true,
      progress : true
    },
    plugins : [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

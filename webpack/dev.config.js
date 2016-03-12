/**
 * WEBPACK CONFIG
 *
 * Notes on config properties:
 *
 * 'entry'
 * Entry point for the bundle.
 *
 * 'output'
 * If you pass an array - the modules are loaded on startup. The last one is exported.
 *
 * 'resolve'
 * Array of file extensions used to resolve modules.
 *
 * 'webpack-dev-server'
 * Is a little node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle.
 * It also has a little runtime which is connected to the server via Socket.IO.
 *
 * 'webpack/hot/dev-server'
 * By adding a script to your index.html file and a special entry point in your configuration
 * you will be able to get live reloads when doing changes to your files.
 *
 * devtool: 'eval-source-map'
 * http://www.cnblogs.com/Answer1215/p/4312265.html
 * The source map file will only be downloaded if you have source maps enabled and your dev tools open.
 *
 * HotModuleReplacementPlugin()
 * Hot Module Replacement (HMR) exchanges, adds or removes modules while an application is running without page reload.
 *
 * NoErrorsPlugin()
 * Hot loader is better when used with NoErrorsPlugin and hot/only-dev-server since it eliminates page reloads
 * altogether and recovers after syntax errors.
 *
 * 'react-hot'
 * React Hot Loader is a plugin for Webpack that allows instantaneous live refresh without losing state
 * while editing React components.
 *
 * 'babel'
 * Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5 source
 * that is actually delivered to the end user browser.
 */

/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '../');
const APP_DIR = path.join(__dirname, '../app');

module.exports = {
  context: APP_DIR,
  devtool: 'eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/dev-server',
    './client'
  ],

  output: {
    path: ROOT_DIR,
    publicPath: '/',
    filename: 'js/bundle.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', APP_DIR]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: ROOT_DIR + 'templates/index.html',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: APP_DIR,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};

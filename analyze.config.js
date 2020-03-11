const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = require('./webpack.config.js')

module.exports.plugins.push(new BundleAnalyzerPlugin())
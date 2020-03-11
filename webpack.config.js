const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

let buildPath = __dirname + '/build';

htmlFile = {
  title: 'SalukiOS',
};

module.exports = {
  // Currently we need to add '.ts' to the resolve.extensions array.
  entry: __dirname + '/src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.png'],
    plugins: [new TsConfigPathsPlugin({ forceIsolatedModules: true })],
  },
  stats: {
    chunks: false,
  },
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=./public/assets/[name].[ext]',
      },
    ],
  },

  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    })
  ],
  devServer: {
    stats: 'minimal',
    open: true,
    port: 5000,
    gzip: true
  },
};

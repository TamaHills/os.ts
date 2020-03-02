const {
    CheckerPlugin,
    TsConfigPathsPlugin,
  } = require('awesome-typescript-loader');
  
  module.exports = {
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      plugins: [new TsConfigPathsPlugin({ forceIsolatedModules: true})],
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
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        
      ],
    },
    plugins: [new CheckerPlugin()],
  };
  
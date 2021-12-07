const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module:{
      rules: [
          {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
          }
      ]
    },
    resolve: {
        extensions: ['.tsx','.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    }
}

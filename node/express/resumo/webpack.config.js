// Importando o modulo path do node
const path = require('path') // node utiliza o CommomJS como sistema de modulo

// exportando esse objeto para fora.
module.exports = {
  mode: 'production',
  entry: './frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map'
}

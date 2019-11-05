const path = require('path')

module.exports = {
  // enntry file
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
}
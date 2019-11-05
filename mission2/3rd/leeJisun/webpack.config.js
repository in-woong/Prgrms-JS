const path = require('path')

module.exports = {
  // enntry file
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.js',
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

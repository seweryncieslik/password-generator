const path = require('path');

module.exports = {
  entry: [
    './src/app.js',
    './src/styles.scss'
  ],
  mode: 'development',
  devServer: {
    static: './',
    port: 8080,
    historyApiFallback: true
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  }
};
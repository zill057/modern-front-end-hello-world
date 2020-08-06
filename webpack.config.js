let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      // CSS support, or change SASS support test as '/\.s[ac]ss|.css$/i'
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src')
      },
      // SASS support
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src'),
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

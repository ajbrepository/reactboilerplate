module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
  //To Run Webpack Directly
  //node ./node_modules/webpack/bin/webpack.js
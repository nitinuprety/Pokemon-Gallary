var webpack = require("webpack");

module.exports = {
  entry: [
    './src/index.js'
  ],
  // devtool: 'cheap-module-source-map',
  output: {
    path: __dirname,
   publicPath: '/',
    headers: { "Access-Control-Allow-Origin": "*" },
    filename: 'bundle.js'
  },
//   plugins: [
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }),
//   new webpack.optimize.DedupePlugin(), //dedupe similar code 
//   new webpack.optimize.UglifyJsPlugin(), //minify everything
//   new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
// ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
         presets: ['react', 'es2015', 'stage-1', 'react-hmre']
         // presets: ['react', 'es2015', 'stage-1']
      }
    },
    { test: /\.css$/, loader: 'style-loader!css-loader'}]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};

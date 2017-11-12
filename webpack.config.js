var path = require('path');
module.exports = {
  //入口
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //出口
  output: {
    path: path.join(__dirname, 'dist'),
    //name   名称同入口js文件
    filename: 'build.js'
  },
  module: {
      loaders: [
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader'  
          }
      ]
  },
  resolve: {
	alias: {'vue': 'vue/dist/vue.js'}
  }
};
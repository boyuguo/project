var path = require('path');

var webpack = require('webpack');

module.exports = {
	// 编译的入口文件
	entry: {
		'app': './src/index.js'
	},
	context: path.resolve(__dirname),
	// 编译输出目录和文件名配置
	output: {
		filename: 'dist/bundle.js',
		path: path.resolve(__dirname),
		publicPath: '/' //  对应输出目录的web路径
	}
}
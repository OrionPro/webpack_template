const SpritesmithPlugin = require('webpack-spritesmith');
const path = require('path');
module.exports = function() {
	return {
		module: {
			loaders: [
				{test: /\.sass$/, loaders: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]},
				{test: /\.png$/, loaders: [
					'file-loader?name=i/[hash].[ext]'
				]}
			]
		},
		resolve: {
			//webpack 2:
			modules: ["node_modules", "spritesmith-generated"]
		},
		plugins: [
			new SpritesmithPlugin({
				src: {
					cwd: path.resolve(__dirname, '../source/img/sprite'),
					glob: '*.png'
				},
				target: {
					image: path.resolve(__dirname, '../source/pages/index/sprite.png'),
					css: path.resolve(__dirname, '../source/sass/sprite.sass')
				},
				apiOptions: {
					cssImageRef: "sprite.png"
				}
			})
		]
	};
};
const SpritesmithPlugin = require('webpack-spritesmith');
const path = require('path');
module.exports = function() {
	return {
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
				},
				spritesmithOptions: {
					padding: 2
				},
				spritesmithConfig: {
					algorithm: 'binary-tree'
				}
			}),
			new SpritesmithPlugin({
				src: {
					cwd: path.resolve(__dirname, '../source/img/sprite'),
					glob: '*.png'
				},
				target: {
					image: path.resolve(__dirname, '../source/pages/blog/sprite.png'),
					css: path.resolve(__dirname, '../source/sass/sprite.sass')
				},
				apiOptions: {
					cssImageRef: "sprite.png"
				},
				spritesmithOptions: {
					padding: 2
				},
				spritesmithConfig: {
					algorithm: 'binary-tree'
				}
			})
		]
	};
};
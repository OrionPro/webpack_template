module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png|svg|gif)$/,
					include: paths,
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]'
					},
				},
			],
		},
	};
};
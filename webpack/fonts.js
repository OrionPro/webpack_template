module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.(eot|ttf|woff)$/,
					include: paths,
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					},
				},
			],
		},
	};
};
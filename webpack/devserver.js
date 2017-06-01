const path = require('path');
module.exports = function () {
	return {
		devServer: {
			stats: 'errors-only',
			port: 9000,
			inline: true,
			hot: true
		}
	}
};




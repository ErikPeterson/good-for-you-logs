'use strict';

module.exports = function(){
	return {
			host: process.env['LOG_HOST'],
			port: process.env['LOG_PORT'],
			path: process.env['LOG_PATH'],
			auth: process.env['LOG_AUTH'],
			ssl: process.env['LOG_SSL'] || false,
			filename: process.env['LOG_FILE']
	}
};
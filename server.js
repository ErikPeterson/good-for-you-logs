'use strict';

const config = require('./config')();
const winstond = require('winstond');

const server = winstond.http.createServer({
	services: ['collect', 'query', 'stream'],
	port: config.port,
	path: config.path
});

server.add(winstond.transports.File, {filename: config.filename});

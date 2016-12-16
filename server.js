'use strict';

const config = require('./config');
const winstond = require('winstond');

const server = winstond.http.createServer({
	services: ['collect', 'query', 'stream'],
	port: config.listener.port,
	path: config.listener.path
});

server.add(winstond.transports.File, {filename: config.listener.filename});

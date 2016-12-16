'use strict';

const logger = require('winston');
const config = require('./config')();

logger.addTransport(logger.transports.Http, config.listener);

module.exports = logger;
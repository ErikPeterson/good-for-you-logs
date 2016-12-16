'use strict';

const logger = require('winston');
const config = require('./config')();

logger.add(logger.transports.Http, config);

module.exports = logger;
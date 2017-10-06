/* eslint-disable no-console */
'use strict';
try {
	module.exports = require('../material-native');
	console.log('Using custom material-native');
} catch ( e ) {
	module.exports = require('material-native');
	console.log('Using material-native from node_modules');
}

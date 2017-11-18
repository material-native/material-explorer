/* eslint-disable no-console */
'use strict';
global.isUsingCustomMaterialNative = true;
module.exports = require('../material-native');
if ( global.isUsingCustomMaterialNative ) {
	console.log('Using custom material-native');
} else {
	console.log('Using material-native from node_modules');
}

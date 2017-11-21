'use strict';
import path from 'path';
import wd from 'wd';

const caps = {
	android: {
		browserName: '',
		'appium-version': '1.3',
		platformName: 'Android',
		platformVersion: '8.0',
		deviceName: 'Android 8.0',
		takesScreenshot: true,
		app: path.resolve(__dirname, '../../android/app/build/outputs/apk/app-debug.apk'),
	},
};

const server = {
	host: '127.0.0.1',
	port: 4723,
};

export default class Helper {
	setup({cap='android'}={}) {
		this.driver = wd.promiseChainRemote(server.host, server.port);
		return this.driver.init(caps[cap]);
	}

	teardown() {
		return this.driver
			.sleep(3000)
			.quit();
	}
}

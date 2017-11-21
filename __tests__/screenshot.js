'use strict';
import path from 'path';
import fs from 'mz/fs';
import {Helper} from './helpers';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe('Screens', () => {
	const helper = new Helper();
	beforeEach(async () => {
		await helper.setup();
		await helper.driver.waitForElementByXPath("//android.widget.TextView[@text='Material Native']", undefined, 10000);
	});
	afterEach(() => helper.teardown());

	const screens = [
		'Colors',
		'Typography',
		'Icons',
		'Ripples',
		'Buttons',
		'Action Buttons',
		'Toggles',
		'Text Fields',
		'Avatars',
		'Dialogs'
	];

	for ( const label of screens ) {
		test(label, async () => {
			const {driver} = helper;
			await driver.waitForElementByXPath(`//android.view.ViewGroup[@focusable]//android.widget.TextView[@text='${label}']`, undefined, 10000)
				.tap()
				.sleep(2000); // Wait for page to render

			const screenshotDir = path.join(__dirname, '../screenshots/');
			if ( !(await fs.exists(screenshotDir)) ) await fs.mkdir(screenshotDir);

			await fs.writeFile(
				path.join(screenshotDir, `${label}.png`),
				new Buffer(await driver.takeScreenshot(), 'base64'));
		});
	}
});

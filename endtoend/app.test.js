import 'babel-polyfill';
const path = require('path');

describe('app', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000/2019-2-Track-Frontend-E-Vihrev');
		await page.waitFor(1000);
	}, 30000);

	it('Log into account, send message', async () => {
		// Loging in:
		await expect(page).toMatch('Messenger');
		await page.waitFor(200);
		await expect(page).toFill('input[id="username"]', 'user');
		await page.waitFor(200);
		await expect(page).toFill('input[id="password"]', 'pass');
		await page.waitFor(200);
		await page.click('input[id="login-username"]');
		await page.waitFor(3000);

		// Navigating to chat:
		await expect(page).toMatch('Messages');
		await page.waitFor(200);
		await expect(page).toMatch('TEST (id:4)');
		await page.waitFor(200);
		await page.click('div[id="TEST (id:4)"]');
		await page.waitFor(3000);

		// SendingMessage:
		const message = Math.random().toString();
		await expect(page).toFill('input[name="message-text"]', message);
		await page.waitFor(200);
		await page.keyboard.press('Enter');
		await page.waitFor(500);
		await expect(page).toMatch(message);
		await expect(page).toMatch('user');

		// Log out
		await expect(page).toMatch('Messages');
		await page.waitFor(200);
		await page.click('img[id="menu-button"]');
		await page.waitFor(200);
		await page.click('div[id="logout-button"]');
	}, 60000);

	it('Log into account, check profile', async () => {
		// Loging in:
		await expect(page).toMatch('Messenger');
		await page.waitFor(200);
		await expect(page).toFill('input[id="username"]', 'user');
		await page.waitFor(200);
		await expect(page).toFill('input[id="password"]', 'pass');
		await page.waitFor(200);
		await page.click('input[id="login-username"]');
		await page.waitFor(3000);

		// Going to profile
		await expect(page).toMatch('Messages');
		await page.waitFor(200);
		await page.click('img[id="menu-button"]');
		await page.waitFor(200);
		await expect(page).toMatch('Settings');
		await page.waitFor(3000);

		// Checking profile and going back
		await page.click('div[id="to-profile-button"]');
		await page.waitFor(200);
		await expect(page).toMatch('user (id:2)');
		await page.waitFor(200);
		await page.click('img[id="menu-button"]');
		await page.waitFor(200);
		await page.click('img[id="back-button"]');
		await page.waitFor(3000);

		// Log out
		await expect(page).toMatch('Messages');
		await page.waitFor(200);
		await page.click('div[id="logout-button"]');
	}, 60000);
});

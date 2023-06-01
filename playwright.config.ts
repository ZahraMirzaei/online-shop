import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	projects: [
		// Desktop browsers
		{
			name: 'Chromium',
			use: { browserName: 'chromium' },
		},
	],

	use: {
		baseURL: 'http://localhost:3000',
		headless: true,
		ignoreHTTPSErrors: true,
		screenshot: 'only-on-failure',
		trace: 'retry-with-trace',
		viewport: {
			height: 720,
			width: 1280,
		}
	},
	testDir: 'tests',
	retries: 1,
	maxFailures: 10,
	timeout: 30000,
	expect: {
		timeout: 5000,
	},
	workers: 4,
}

export default config

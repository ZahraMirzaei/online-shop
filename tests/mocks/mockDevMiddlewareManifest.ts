import { BrowserContext } from '@playwright/test'

const defaultOutput = {
}

export const mockDevMiddlewareManifest = async (context: BrowserContext, output = defaultOutput): Promise<void> => {
	await context.route('**/static/development/_devMiddlewareManifest.json', (route) => {
		void route.fulfill({
			contentType: 'application/json',
			status: 200,

			body: JSON.stringify([]),
		})
	})
}

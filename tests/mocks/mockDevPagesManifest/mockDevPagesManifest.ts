import { BrowserContext } from '@playwright/test'
import { defaultDevPagesManifestData } from './defaultDevPagesManifestData'

export const mockDevPagesManifest = async (context: BrowserContext, output = defaultDevPagesManifestData): Promise<void> => {
	await context.route('**/static/development/_devPagesManifest.json', (route) => {
		void route.fulfill({
			contentType: 'application/json',
			status: 200,

			body: JSON.stringify({
				...defaultDevPagesManifestData,
				...output,
			}),
		})
	})
}

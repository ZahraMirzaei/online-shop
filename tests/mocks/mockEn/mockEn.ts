import { BrowserContext } from '@playwright/test'
import {defaultEnData} from './defaultEnData'

export const mockEn = async (context: BrowserContext, output = defaultEnData): Promise<void> => {
	await context.route('**/data/development/en.json', (route) => {
		void route.fulfill({
			contentType: 'application/json',
			status: 200,

			body: JSON.stringify({
				...defaultEnData,
				...output,
			}),
		})
	})
}

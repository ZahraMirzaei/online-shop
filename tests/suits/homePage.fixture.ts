import { test as base } from '@playwright/test'

import { HomePage } from '../pageObjects/pages/HomePage'

type TestFixtures = {
	homePage: HomePage
}

export const test = base.extend<TestFixtures>({
	homePage: async ({ page, context }, use) => {
		const homePage = new HomePage(page)
		await Promise.all([
		])

		await homePage.open()
		await use(homePage)
	},
})

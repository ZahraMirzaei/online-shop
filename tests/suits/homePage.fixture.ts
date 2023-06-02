import { test as base } from '@playwright/test'
import {mocks} from '../mocks/'
import { HomePage } from '../pageObjects/pages'

type TestFixtures = {
	homePage: HomePage
}

export const test = base.extend<TestFixtures>({
	homePage: async ({ page, context }, use) => {
		const homePage = new HomePage(page)
		
		await Promise.all([
			mocks.en(context),
			mocks.devMiddlewareManifest(context),
			mocks.devPagesManifest(context),
			mocks.userInfo(context),
		])

		await homePage.open()
		await use(homePage)
	},
})

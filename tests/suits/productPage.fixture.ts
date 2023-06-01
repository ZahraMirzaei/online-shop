import { test as base } from '@playwright/test'
import {
	mockEn,
	mockDevMiddlewareManifest,
	mockDevPagesManifest,
    mockProductData
} from '../mocks/'

import { ProductPage } from '../pageObjects/pages/ProductPage'
import { HeaderComponent } from '../pageObjects/components/HeaderComponent'

type TestFixtures = {
	productPage: ProductPage
	headerComponent: HeaderComponent
}

export const test = base.extend<TestFixtures>({
	productPage: async ({ page, context }, use) => {
		const productPage = new ProductPage(page)
		await Promise.all([
			// mockEn(context),
			mockDevMiddlewareManifest(context),
			mockDevPagesManifest(context),
            mockProductData(context),
		])

		await productPage.open()
		await use(productPage)
	},

    headerComponent: async ({ page }, use) => {
		const headerComponent = new HeaderComponent(page)

		await use(headerComponent)
	},
})

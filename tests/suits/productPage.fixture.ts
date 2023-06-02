import { test as base } from '@playwright/test'
import {mocks} from '../mocks'
import { ProductPage } from '../pageObjects/pages/'
import { HeaderComponent } from '../pageObjects/components/'

type TestFixtures = {
	productPage: ProductPage
	headerComponent: HeaderComponent
}

export const test = base.extend<TestFixtures>({
	productPage: async ({ page, context }, use) => {
		const productPage = new ProductPage(page)
		
		await Promise.all([
			mocks.devMiddlewareManifest(context),
			mocks.devPagesManifest(context),
			mocks.productData(context),
		])

		await productPage.open()
		await use(productPage)
	},

    headerComponent: async ({ page }, use) => {
		const headerComponent = new HeaderComponent(page)

		await use(headerComponent)
	},
})

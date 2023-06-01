import { Page, test, expect } from '@playwright/test'

import { BasePage } from './BasePage'

/**
 * ProductPage - page for products
 */
export class ProductPage extends BasePage {

	readonly addToCart = this.page.getByTestId('add-to-cart')

	constructor(page: Page) {
		super(page)

		this.pageUrl = `/redirect?/products/products/products/product`
	}

	public async clickAddToCart(): Promise<void> {
		await test.step(`Adding product to cart`, async () => {
			await this.addToCart.click()
		})
	}
}

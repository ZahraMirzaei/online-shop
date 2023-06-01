import type { Page, Locator } from '@playwright/test'
import { expect, test } from '@playwright/test'

/**
 * HeaderComponent - page with main header elements
 */
export class HeaderComponent {
	public readonly page: Page
	public readonly headerCart: Locator
	public readonly loginAndOrder: Locator
	public readonly order: Locator

	constructor(page: Page) {
		this.page = page
        this.headerCart = this.page.getByTestId('header-cart')
        this.loginAndOrder = this.page.getByTestId('login-and-order')
        this.order = this.page.getByTestId('order')
	}

	public async hoverHeaderCart(): Promise<void> {
		await test.step('Hovering mouse on header cart icon', async () => {
				await this.headerCart.hover()
		})
	}

    public async checkLoginAndOrderVisible(): Promise<void> {
		await test.step('Checking that login and order button is visible', async () => {
			await expect(async () => {
				expect(await this.loginAndOrder.isVisible()).toBeTruthy()
			}).toPass()
		})
	}

    public async checkOrderVisible(): Promise<void> {
		await test.step('Checking that order button is visible', async () => {
			await expect(async () => {
				expect(await this.order.isVisible()).toBeTruthy()
			}).toPass()
		})
	}
}

import type { Page, Locator } from '@playwright/test'
import { expect, test } from '@playwright/test'

/**
 * BasePage - page with commons methods,  
 * which is similar for most pages
 */
export class BasePage {
	public readonly page: Page

	protected pageUrl: string | RegExp

	constructor(page: Page) {
		this.page = page
		this.pageUrl = process.env.PLAYWRIGHT_URL ?? ''
	}

	public async open(directUrl = this.pageUrl): Promise<void> {
		await test.step('Открываем страницу', async () => {
				await this.page.goto(directUrl)
		})
	}
}

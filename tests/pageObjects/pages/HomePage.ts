import { Page } from '@playwright/test'

import { BasePage } from './basePage'

const appId = '1'

export class HomePage extends BasePage {
	constructor(page: Page) {
		super(page)

		this.pageUrl = `http://localhost:3000/`
	}
}

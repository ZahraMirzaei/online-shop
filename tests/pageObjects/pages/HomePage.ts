import { Page, test, expect } from '@playwright/test'

import { BasePage } from './BasePage'

/**
 * HomePage - start page of shop
 */
export class HomePage extends BasePage {

	readonly slideRight = this.page.getByTestId('slide-right')
	readonly slideLeft = this.page.getByTestId('slide-left')
	readonly secondSlide = this.page.getByTestId('slide-2').nth(0)
	readonly sixthSlide = this.page.getByTestId('slide-6').nth(0)

	constructor(page: Page) {
		super(page)

		this.pageUrl = `/redirect?/`
	}

	public async clickSlideRight(): Promise<void> {
		await test.step(`Clicking right slider arrow`, async () => {
			await this.slideRight.click({force: true})
		})
	}

	public async clickSlideLeft(): Promise<void> {
		await test.step(`Clicking left slider arrow`, async () => {
			await this.slideLeft.click({force: true})
		})
	}

	public async checkSecondSlideVisible(): Promise<void> {
		await test.step('Checking that second slide is visible', async () => {
			await expect(async () => {
				expect(await this.secondSlide.isVisible()).toBeTruthy()
			}).toPass()
		})
	}

	public async checkSixthSlideVisible(): Promise<void> {
		await test.step('Checking that sixth slide is visible', async () => {
			await expect(async () => {
				expect(await this.sixthSlide.isVisible()).toBeTruthy()
			}).toPass()
		})
	}
}

import { test } from './homePage.fixture'

test.describe('Home page', () => {

	test.describe('Carousel', () => {

		test('Clicking right carousel arrow -> shows 2nd slide', async ({ homePage }) => {
			await homePage.clickSlideRight()
			await homePage.checkSecondSlideVisible()
		})

		test('Clicking left carousel arrow -> shows 6th slide', async ({ homePage }) => {
			await homePage.clickSlideRight()
			await homePage.checkSixthSlideVisible()
		})
})
})

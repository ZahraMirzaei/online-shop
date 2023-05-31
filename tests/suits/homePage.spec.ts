import { test } from './homePage.fixture'

test.describe('Home page', () => {

	test.describe('Courusel', () => {

		test('Clicking right courusel arrow -> shows 2nd slide', async ({ homePage }) => {
			await homePage.clickSlideRight()
			await homePage.checkSecondSlideVisible()
		})

		test('Clicking left courusel arrow -> shows 6th slide', async ({ homePage }) => {
			await homePage.clickSlideRight()
			await homePage.checkSixthSlideVisible()
		})
})
})

import { test } from './productPage.fixture'
import {
	mockUserInfo
} from '../mocks'

test.describe('Cart page', () => {

	test.describe('Without suthorisation', () => {

		test('User adding product to cart -> displaying login and order button', async ({ productPage, headerComponent }) => {
			await productPage.clickAddToCart()
			await headerComponent.hoverHeaderCart()
			await headerComponent.checkLoginAndOrderVisible()
		})
    })

    test.describe('With suthorisation', () => {
		test.beforeEach(async ({ context }) => {
			await mockUserInfo(context)
		})

		test('User adding product to cart -> displaying order button', async ({ productPage, headerComponent }) => {
			await productPage.clickAddToCart()
			await headerComponent.hoverHeaderCart()
			await headerComponent.checkOrderVisible()
		})
    })
})

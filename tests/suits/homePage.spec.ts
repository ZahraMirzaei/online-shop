import { test } from './homePage.fixture'

test.describe('CreditLandingPage', () => {

		test('Пользователь кликает кнопку "назад" -> Возврат к первому шагу', async ({ homePage }) => {
			await homePage.page.pause()
		})
})

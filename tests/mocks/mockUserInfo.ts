import type { BrowserContext } from '@playwright/test'

const defaultUser = '{%22_id%22:%22wdxlieAxEBio0EAd5d8KeH%22%2C%22name%22:%22Skipi%22%2C%22email%22:%22skipi0007@mail.ru%22%2C%22isAdmin%22:false%2C%22token%22:%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ3ZHhsaWVBeEVCaW8wRUFkNWQ4S2VIIiwibmFtZSI6IlNraXBpIiwiZW1haWwiOiJza2lwaTAwMDdAbWFpbC5ydSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU2MzQzNzAsImV4cCI6MTY4ODIyNjM3MH0.bUP9gWd5Tkla8lVEOzGnjvpp4kxm2PmuSCOoEaD3Cd4%22}'

export async function mockUserInfo(
	context: BrowserContext,
	value = defaultUser,
): Promise<void> {
	await context.addCookies([
		{
			url: `http://localhost:3000`,
			name: 'userInfo',
			value,
		},
	])
}

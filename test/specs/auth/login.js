import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import HomePage from '../../pageobjects/home.page.js'

describe('Login to application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('john.smith@gmail.com', 'john')
        await expect(HomePage.getLoggedInName).toBeExisting()
        await expect(HomePage.getLoggedInName).toHaveText(expect.stringContaining('Logged in as'))
    })
})
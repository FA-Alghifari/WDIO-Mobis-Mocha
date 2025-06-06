import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import signupPage from '../../pageobjects/signup.page.js'

describe('Login to application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.btnSignUp.click()
        await signupPage.signup('Tester', 'One','01.01.1990','TesterOne@ogya.co.id', 'Passw0rd')
        await expect(signupPage.txtSnackBar).toBeExisting()
        await expect(signupPage.txtSnackBar).toHaveText(expect.stringContaining('signed up'))
    })
})



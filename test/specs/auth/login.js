import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import HomePage from '../../pageobjects/home.page.js'
import { loginData } from '../../data/testdata.js';
import { readExcelData } from '../../utils/excelReader.js';

const loginXlData = readExcelData('../data/testdata.xlsx', 'Sheet1');


describe('Data Driven Login Test', () => {
  loginData.forEach(({ username, password }) => {
    it(`should try to login with ${username}`, async () => {
        await LoginPage.login('john.smith@gmail.com', 'john')        
        await expect(HomePage.getLoggedInName).toBeExisting()
        await expect(HomePage.getLoggedInName).toHaveText(expect.stringContaining('Logged in as'))
        await HomePage.logout()
    });
  });
});

describe('Login Tests - Excel Data Driven', () => {
  loginXlData.forEach(({ username, password }) => {
    it(`should test login with ${username}`, async () => {
        await expect(HomePage.getLoggedInName).toBeExisting()
        await expect(HomePage.getLoggedInName).toHaveText(expect.stringContaining('Logged in as'))
        await HomePage.logout()
    });
  });
});
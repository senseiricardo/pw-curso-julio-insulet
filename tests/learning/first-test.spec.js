import { test, expect } from '@playwright/test';

test('My First Test in PW', async ({ page }) => {

    // Page object = WebDriver

    // Navegar Launch Browser
    await page.goto('https://www.saucedemo.com/')

    // Login
    //await page.fill('#user-name', 'standard_user')
    //await page.fill('#password', 'secret_sauce')
    //await page.click('#login-button')

    // Selectors

    /*
    1- page.locator()
    2- page.getByRole
    3- page.getByText
    4- page.getByLabel
    */

    // page.locator()

    await page.locator('[name="user-name"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')

    // page.getByRole = toma el objeto de a cuerdo a su tipo
    await page.getByRole('button').click();

    // page.getByText() = Interactuar con el elemento basado en su texto
    await page.getByText('Sauce Labs Backpack').click()

});
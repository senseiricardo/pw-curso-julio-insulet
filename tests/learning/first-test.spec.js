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

    await page.locator('[name="user-name"]').type('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')

    // page.getByRole = toma el objeto de a cuerdo a su tipo
    await page.getByRole('button').click();

    // page.getByText() = Interactuar con el elemento basado en su texto
    await page.getByText('Sauce Labs Backpack').click()

    // Acciones mas comunes en PW
    /**
     * Click
     * fill -> escribir texto en un input
     * type -> simular el teclado carecter por caracter
     * hover -> mover el mouse sobre el elemento
     * check -> marcar checkbox
     * uncheck -> desmarcar un checkbox
     * selectOption -> seleccionar un valor de dropdown
     * press -> presionar alguna
     */

    // Assertions == Validaciones

    // Ejemplos que podemos validar:

     /**
      * 
      * Que un elemento sea visible
      * que una pagina este en la URL especifica
      * Que un elemento tenga cierto texto
      * Que un elemento NO exista
      * Que sea la cantidad esperada de elementos 
      * 
      * Playwright:
      * 
      * expect()
      * 
      * Assertions mas comunes:
      * 
      * toBeVisible
      * toHaveText
      * toContainText
      * toHaveURL
      * toHaveValue
      * toHaveCount
      */

     await expect(page).toHaveURL(/inventory-item\.html/);



});
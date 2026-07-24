import { test, expect } from '@playwright/test';

test('Waits', async ({ page, context }) => {

    // Hard wait (No utilizar)

    // Login 10seg

    await page.goto('https://www.saucedemo.com/') // Navigation - Launch BRowser

    // Explicit Wait
    await expect(page.locator('[name="user-name"]')).toBeEditable()
    await page.locator('[name="user-name"]').type('standard_user')
    await expect(page.locator('[data-test="password"]')).toBeVisible({timeout : 10000})
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await expect(page.getByRole('button')).toBeEnabled() 
    await page.getByRole('button').click();

    await page.goBack(); // NAvigation - Pagina anterior

    await page.waitForURL('https://www.saucedemo.com/') 
    
    await page.reload() // Navigation - Cargar la pagina nuevamente

    await page.waitForURL('https://www.saucedemo.com/')

    await page.goto('https://www.google.com/') // NAvigation - Abrir otra pagina

    // Abrir otra pestaña
    const newPagePromise = context.waitForEvent('page')
    await page.evaluate(() => {
        window.open('https://www.saucedemo.com/')
    });
    
    await page.waitForTimeout(5000) 


})
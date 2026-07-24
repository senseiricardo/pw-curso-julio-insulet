import { test, expect } from '@playwright/test';

test('Waits', async ({ page }) => {

    // Hard wait (No utilizar)

    // Login 10seg

    await page.goto('https://www.saucedemo.com/')

    // Explicit Wait
    await expect(page.locator('[name="user-name"]')).toBeEditable()// Sync
    await page.locator('[name="user-name"]').type('standard_user')
    await expect(page.locator('[data-test="password"]')).toBeVisible({timeout : 10000})// Sync
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await expect(page.getByRole('button')).toBeEnabled() // Sync
    await page.getByRole('button').click();

    // TODO: Deuda Tecnica
    //await page.waitForTimeout(3000) // -> HARD WAIT (Menos Recomendada)

    await page.waitForURL('**/inventory.html') // -> EXPLICIT WAIT (Mas Recomendada)


})
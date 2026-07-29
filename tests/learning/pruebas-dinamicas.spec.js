import { test, expect } from '@playwright/test';

test('Dynamic Tests', async ({ page, context }) => {

    await page.goto('https://www.saucedemo.com/') 

    await expect(page.locator('[name="user-name"]')).toBeEditable()
    await page.locator('[name="user-name"]').type('standard_user')
    await expect(page.locator('[data-test="password"]')).toBeVisible({timeout : 10000})
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await expect(page.getByRole('button')).toBeEnabled() 
    await page.getByRole('button').click();

    // Flujo dinamico
    const addButtons = page.locator('button', {hastext: 'Add to cart'})

    const firstAddButton = addButtons.first()
    const secondAddButton = addButtons.nth(1);

    await firstAddButton.click()

    await page.locator('.shopping_cart_link').click()


})

test('Dynamic Tests 2', async ({ page, context }) => {

    await page.goto('https://www.saucedemo.com/') 

    await expect(page.locator('[name="user-name"]')).toBeEditable()
    await page.locator('[name="user-name"]').type('standard_user')
    await expect(page.locator('[data-test="password"]')).toBeVisible({timeout : 10000})
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await expect(page.getByRole('button')).toBeEnabled() 
    await page.getByRole('button').click();

    const inventoryItems = page.locator('.inventory_item')

    // filter = permitir reducir la coleccion
    const bikeLightItem = inventoryItems.filter({hasText: 'Sauce Labs Bike Light' })

    const addButton = bikeLightItem.locator('button')

    await addButton.click()


})
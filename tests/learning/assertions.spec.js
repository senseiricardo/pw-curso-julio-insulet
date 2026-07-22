import { test, expect } from '@playwright/test';

test('Test -> Assertions', async ({ page }) => {

    /**
     * TEST CASE
     *  Abrir SauceDemo.
        Iniciar sesión con standard_user.
        Validar que se muestre el inventario.
        Validar información del producto “Sauce Labs Backpack”.
        Agregar el producto al carrito.
        Validar el contador del carrito.
        Abrir el carrito y validar el producto.
        Completar el checkout.
        Validar que la compra finalice exitosamente.
     */

        // 1. Abrir SauceDemo app
        await page.goto('https://www.saucedemo.com/')

        // 2. Iniciar sesion con standard user
        await page.locator('[name="user-name"]').type('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.getByRole('button').click();

        // 3. Validar que se muestre el inventario
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') // Assertion 1
        await expect(page.getByText('Products')).toBeVisible() // Assertion 2

        // 4. Validar información del producto “Sauce Labs Backpack”.
        //await page.getByText('Sauce Labs Backpack').click()

        // TIP: la mayoria de las veces const es para guardar elementos
        const backPackProduct = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' })

        // Validar que sea visible
        await expect(backPackProduct).toBeVisible()
        // Validar que el texto sea Sauce Labs Backpack
        await expect(backPackProduct.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack')

        // Story: Los productos en la pagina de Inventory tendran el precio
        await expect(backPackProduct.locator('.inventory_item_price')).toHaveText('$29.99')

        // Validar el description
        await expect(backPackProduct.locator('.inventory_item_desc')).not.toBeEmpty()

        // 5. Agregar producto al carrito
        await backPackProduct.getByRole('button').click()

        // 6. Validar el contador del carrito
        const cartBadge = page.locator('.shopping_cart_badge')

        await expect(cartBadge).toBeVisible()
        await expect(cartBadge).toHaveText("1")

        // 7. Abrir el carrito y validar el producto.
        await page.locator('.shopping_cart_link').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html') // Assertion 1
        await expect(page.getByText('Your Cart')).toBeVisible() // Assertion 2
        await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' })).toHaveCount(1)

        // 8. Completar el checkout.
        await page.getByRole('button', {name: 'Checkout'}).click()
        // completar los datos
        await page.getByPlaceholder('First Name').fill("Ricardo")
        await page.getByPlaceholder('Last Name').fill("Avalos")
        await page.getByPlaceholder('Zip/Postal Code').fill("121345")
        await page.getByRole('button', {name: 'Continue'}).click()

        // 9. Validar que la compra finalice exitosamente
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
        await expect(page.getByText('Checkout: Overview')).toBeVisible()

        // Ejercicio en clase/tarea
        //**
        // Validar el precio del producto en el checkout
        // Validar la suma del Price total con taxes incluidos
        //  */

        await page.getByRole('button', {name: 'Finish'}).click()

        await expect(page.getByRole('heading', { name : 'Thank you for your order!'})) // Assertion

        await expect(page.getByRole('button', {name: 'Back Home'})).toBeEnabled()

});
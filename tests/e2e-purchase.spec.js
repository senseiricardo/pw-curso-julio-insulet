import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { InventoryPage } from '../pages/inventory.page.js';
import { CartPage } from '../pages/cart.page.js';
import { CheckoutPage } from '../pages/checkout.page.js';
import { CheckoutStepPage } from '../pages/checkoutstep.js';
import { CheckoutcompletePage } from '../pages/checkoutcomplete.page.js';

test('E2E Purchase Test', async ({ page, context }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    const checkoutStepPage = new CheckoutStepPage(page)
    const coComplete = new CheckoutcompletePage(page)

    // Launch browser
    await loginPage.goto()

    // Login process
    await loginPage.login('standard_user', 'secret_sauce')

    // Select First product
    await inventoryPage.selectFirstProduct()

    // Click Cart
    await inventoryPage.clickCart()

    // Click Checkout
    await cartPage.clickCheckOut()

    // Fill out checkout form
    await checkoutPage.filloutCheckoutInfo("Ricardo", "Avalos", "00000")

    // Click Continue btn
    await checkoutPage.clickContinue()

    // Click Finish
    await checkoutStepPage.clickFinish()

    // Validar Thank you message
    await coComplete.verifyThankYouMessage()


})
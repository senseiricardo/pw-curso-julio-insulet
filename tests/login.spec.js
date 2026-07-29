import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { InventoryPage } from '../pages/inventory.page.js'
import { users } from '../data/users.js'

// Test Suites = Agrupador de Tests
test.describe('Login - Test suite', () =>{
    test('TC01 - Login Exitoso', async ({ page, context }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page)

        // Launch browser
        await loginPage.goto()

        // Enter valid credentials
        //username = users.standard.username
        //password = users.standard.password
        //await loginPage.login(username,password)

        await loginPage.login(users.standard.username,users.standard.password)

        // Validate user is logged
        await expect(page).toHaveURL(/inventory.html/)


    })

    test('TC02 - Login Invalido', async ({ page, context }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page)

        // Launch browser
        await loginPage.goto()

        // Enter valid credentials
        await loginPage.login(users.wrong.username,users.wrong.password)

        // Verificar mensaje de error
        await loginPage.verifyErrorMessage("Username and password do not match any user in this service")


    })
})
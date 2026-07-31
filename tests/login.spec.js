import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { InventoryPage } from '../pages/inventory.page.js'
import { users } from '../data/users.js'

// Hooks = Listeners (Version antigua)

//**
// beforeAll  -> Corre una vez antes de todos los tests
// beforeEach -> Corre antes de cada test
// afterEach  -> Correr despues de cada test
// afterAll   -> Corre una vez al final de las pruebas
//  */

//**
// WORKERS (PARALELIZACION)
// 
// Cuando tener cuidado con los workers?
// 1- Los tests sean independientes
// 2- No contengan datos sensibles
// 3- Un test afecte a otro test por ejecutarse al mismo tiempo
//  */

// Test Suites = Agrupador de Tests
test.describe('Login - Test suite', () =>{ // Test Suite

    let loginPage;
    let inventoryPage;

    test.beforeAll(async () => {
        console.log("Before All - Setup global")
    })

    test.beforeEach(async ({page}) => {
        console.log("Before Each - Test")
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page)

        // Launch browser
        await loginPage.goto()
    })

    test.afterEach(async () => {
        console.log("After Each - Test")
    })

    test.afterAll(async () => {
        console.log("After All - Clean Tests")
    })

    test('TC01 - Login Exitoso', async ({ page, context }) => {

        // Enter valid credentials
        //username = users.standard.username
        //password = users.standard.password
        //await loginPage.login(username,password)

        await loginPage.login(users.standard.username,users.standard.password)

        // Validate user is logged
        await expect(page).toHaveURL(/inventory.html/)


    })

    test('TC02 - Login Invalido', async ({ page, context }) => {

        // Enter valid credentials
        await loginPage.login(users.wrong.username,users.wrong.password)

        // Verificar mensaje de error
        await loginPage.verifyErrorMessage("Username and password do not match any user in this service")


    })

    test('TC03 - Login Bloqueado', async ({ page, context }) => {

        // Enter valid credentials
        await loginPage.login(users.locked.username,users.locked.password)

        // Verificar mensaje de error
        await loginPage.verifyErrorMessage("Otro mensaje")

    })
})
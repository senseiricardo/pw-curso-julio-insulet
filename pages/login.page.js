import { expect } from "@playwright/test";

export class LoginPage{
    constructor(page){
        this.page = page;
        // Objetos de la pagina Login
        this.usernameInput = page.locator('[name="user-name"]');
        this.usernamePwd = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[name="login-button"]')
        this.errorMsg = page.locator('[data-test="error"]')
    }

    // Funciones = Comportamiento
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(username, password){
        await this.usernameInput.fill(username)
        await this.usernamePwd.fill(password)
        await this.loginBtn.click()
    }

    async verifyErrorMessage(messageDes){
        await expect(this.errorMsg).toBeVisible();
        await expect(this.errorMsg).toContainText(messageDes)
    }
}
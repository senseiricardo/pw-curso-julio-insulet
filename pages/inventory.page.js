export class InventoryPage{
    constructor(page){
        this.page = page;
        // Objetos
        this.title = page.locator('[data-test="title"]')
        this.addCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cart = page.locator('[data-test="shopping-cart-badge"]')
    }

    // Funciones

    /**
     * @name = selectFirstProduct
     * @params = NA
     * @description = Esta funcion sirve para seleccionar el primer producto
     * @author: ravalos
     */
    async selectFirstProduct(){
        this.addCart.click()
    }

    async clickCart(){
        await this.cart.click()
    }

}
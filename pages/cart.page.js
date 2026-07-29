export class CartPage{
    constructor(page){
        this.page = page;
        // Objetos
        this.checkoutBtn = page.getByRole('button', {name: 'Checkout'})
    }

    async clickCheckOut(){
        await this.checkoutBtn.click()
    }

}
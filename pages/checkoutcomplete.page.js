import { expect } from "@playwright/test";

export class CheckoutcompletePage{
    constructor(page){
        this.page = page;
        // Objetos
        this.thankYouMessage = page.getByRole('heading', { name : 'Thank you for your order!'})  
    }

    async verifyThankYouMessage(){
        await expect(this.thankYouMessage).toBeVisible()
    }

}
export class CheckoutPage{
    constructor(page){
        this.page = page;
        // Objetos
        this.firstNameText = page.getByPlaceholder('First Name')
        this.lastNameText = page.getByPlaceholder('Last Name')
        this.zipcode = page.getByPlaceholder('Zip/Postal Code')
        this.continueBtn = page.getByRole('button', {name: 'Continue'})
        
    }

    async filloutCheckoutInfo(firstname, lastname, zipcode){
        await this.firstNameText.fill(firstname)
        await this.lastNameText.fill(lastname)
        await this.zipcode.fill(zipcode)
    }

    async clickContinue(){
        await this.continueBtn.click()
    }

}
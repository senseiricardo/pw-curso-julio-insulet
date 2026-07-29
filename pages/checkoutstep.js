export class CheckoutStepPage{
    constructor(page){
        this.page = page;
        // Objetos
        this.finishBtn = page.getByRole('button', {name: 'Finish'})
    }

    async clickFinish(){
        await this.finishBtn.click()
    }

}
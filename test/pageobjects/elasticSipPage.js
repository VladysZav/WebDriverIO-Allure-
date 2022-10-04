class ElasticSipPage {
    get acceptCloseButton () {
        return $('button=Accept and close');
    };
    get listBoxButton () {
        return $('main div button[aria-haspopup="listbox"]'); 
    };
    get unitedKingdomButton () {
        return $('a=United Kingdom'); 
    };
    
    async acceptCloseButtonClick (){
        try{
            await this.acceptCloseButton.click();
    }catch{
        console.log('Accept close button is not displayed.');
    }};
    async openTelnyxElasticSip() {
        await browser.url('https://telnyx.com/pricing/elastic-sip')
    };
    async listBoxScrollTo() {
        await this.listBoxButton.scrollIntoView(); 
    };
    async listBoxClick() {
        await this.listBoxButton.click(); 
    };
    async unitedKingdomButtonClick() {
        await this.unitedKingdomButton.click(); 
    };
}
export default new ElasticSipPage();
class MainPage {
    get acceptCloseButton () {
        return $('button=Accept and close');
    };
    get aboutUsButton () { 
        return $('span=About Us')
    };
    get websiteTermsAndConditionsButton () { 
        return $('span=Website Terms and Conditions')
    };

    async acceptCloseButtonClick (){
        try{
            await this.acceptCloseButton.click();
    }catch{
        console.log('Accept close button is not displayed.');
    }};
    async openTelnyx() {
        await browser.url('https://telnyx.com/')
    };
    async aboutUsButtonClick (){
        await this.aboutUsButton.click();
    };
    async websiteTermsAndConditionsButtonClick (){
        await this.websiteTermsAndConditionsButton.click();
    };
    async aboutUsButtonScrollTo (){
        await this.aboutUsButton.scrollIntoView();
    };
    async websiteTermsAndConditionsButtonScrollTo (){
        await this.websiteTermsAndConditionsButton.scrollIntoView();
    };
}
export default new MainPage();
class SipTrunksPage {
    get acceptCloseButton () {
        return $('button=Accept and close');
    };
    get ucaasButton () {
        return $('h3=UCaaS'); 
    };
    get managedServicesButton () {
        return $('h3=Managed Services'); 
    };
    get smallBusinessButton () {
        return $('h3=Small Business'); 
    };
    get multiCloudButton () {
        return $('h3=Multi-Cloud'); 
    };

    async acceptCloseButtonClick (){
        try{
            await this.acceptCloseButton.click();
    }catch{
        console.log('Accept close button is not displayed.');
    }};
    async openTelnyxSipTrunks() {
        await browser.url('https://telnyx.com/products/sip-trunks')
    };
    async ucaasButtonScrollTo() {
        await this.ucaasButton.scrollIntoView(); 
    };
    async ucaasButtonClick() {
        await this.ucaasButton.click(); 
    };
    async managedServicesButtonClick() {
        await this.managedServicesButton.click(); 
    };
    async smallBusinessButtonClick() {
        await this.smallBusinessButton.click(); 
    };
    async multiCloudsButtonClick() {
        await this.multiCloudButton.click(); 
    };
    async managedServicesButtonScrollTo() {
        await this.managedServicesButton.scrollIntoView(); 
    };
    async smallBusinessButoonScrollTo() {
        await this.smallBusinessButton.scrollIntoView(); 
    };
    async multiCloudsButtonScrollTo() {
        await this.multiCloudButton.scrollIntoView(); 
    };
}
export default new SipTrunksPage();
class VoiceApiPage {
    get acceptCloseButton () {
        return $('button=Accept and close');
    };
    get cloudIVRButton () {
        return $('h3=Cloud IVR'); 
    };
    get contactCenterButton () {
        return $('h3=Contact Center'); 
    };
    get callTrackingButton () {
        return $('h3=Call Tracking'); 
    };
    get aiAndVoiceAnalyticsButton () {
        return $('h3=AI & Voice Analytics'); 
    };
    
    async acceptCloseButtonClick (){
        try{
            await this.acceptCloseButton.click();
    }catch{
        console.log('Accept close button is not displayed.');
    }};
    async openTelnyxVoiceApi() {
        await browser.url('https://telnyx.com/products/voice-api')
    };
    async cloudIVRButtonScrollTo() {
        await this.cloudIVRButton.scrollIntoView(); 
    };
    async cloudIVRButtonClick() {
        await this.cloudIVRButton.click(); 
    };
    async contactCenterButtonClick() {
        await this.contactCenterButton.click(); 
    };
    async callTrackingButtonClick() {
        await this.callTrackingButton.click(); 
    };
    async aiAndVoiceAnalyticsButtonClick() {
        await this.aiAndVoiceAnalyticsButton.click(); 
    };
    async contactCenterButtonScrollTo() {
        await this.contactCenterButton.scrollIntoView(); 
    };
    async callTrackingButtonScrollTo() {
        await this.callTrackingButton.scrollIntoView(); 
    };
    async aiAndVoiceAnalyticsButtonScrollTo() {
        await this.aiAndVoiceAnalyticsButton.scrollIntoView(); 
    };
}
export default new VoiceApiPage();
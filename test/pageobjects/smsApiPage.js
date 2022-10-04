class SmsApiPage {
    get acceptCloseButton () {
        return $('button=Accept and close');
    };
    get twexitApiButton () {
        return $('h3=Twexit API'); 
    };
    get verifyApiButton () {
        return $('h3=Verify API'); 
    };
    get smsNotificationsButton () {
        return $('h3=SMS notifications'); 
    };
    get textAppointmentRemindersButton () {
        return $('h3=Text appointment reminders'); 
    };
    get twoFactorAuthenticationButton () {
        return $('h3=Two Factor Authentication'); 
    };
    get smsMarketingButton () {
        return $('h3=SMS marketing'); 
    };
    
    async acceptCloseButtonClick (){
        try{
            await this.acceptCloseButton.click();
    }catch{
        console.log('Accept close button is not displayed.');
    }};
    async openTelnyxVSmsApi() {
        await browser.url('https://telnyx.com/products/sms-api')
    };
    async twexitApiButtonClick() {
        await this.twexitApiButton.click(); 
    };
    async verifyApiButtonClick() {
        await this.verifyApiButton.click(); 
    };
    async smsNotificationsButtonClick() {
        await this.smsNotificationsButton.click(); 
    };
    async textAppointmentReminderButtonClick() {
        await this.textAppointmentRemindersButton.click(); 
    };
    async twoFactorAuthenticationButtonClick() {
        await this.twoFactorAuthenticationButton.click(); 
    };
    async smsMarketingButtonClick() {
        await this.smsMarketingButton.click(); 
    };
    async twexitApiButtonScrollTo() {
        await this.twexitApiButton.scrollIntoView(); 
    };
    async verifyApiButtonScrollTo() {
        await this.verifyApiButton.scrollIntoView(); 
    };
    async smsNotificationsButtonScrollTo() {
        await this.smsNotificationsButton.scrollIntoView(); 
    };
    async textAppointmentRemindersButtonScrollTo() {
        await this.textAppointmentRemindersButton.scrollIntoView(); 
    };
    async twoFactorAuthenticationButtonScrollTo() {
        await this.twoFactorAuthenticationButton.scrollIntoView(); 
    };
    async smsMarketingButtonScrollTo() {
        await this.smsMarketingButton.scrollIntoView(); 
    };
}
export default new SmsApiPage();
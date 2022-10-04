class ContactUsPage {
    get acceptCloseButton () {
        return $('button=Accept and close');
    };
    get questionsBox () {
        return $('main div div');
    };
    get reasonForContactButton () {
        return $('[id="Reason_for_Contact__c"]');
    };
    get supportButton () {
        return $('option=Support');
    };
    get firstNameInput () {
        return $('[id="FirstName"]');
    };
    get lastNameInput () {
        return $('[id="LastName"]');
    };
    get businessEmailInput () {
        return $('[id="Email"]');
    };
    get phoneNumberInput () {
        return $('[id="Phone_Number_Base__c"]');
    };
    get companyWebsiteInput () {
        return $('[id="Website"]');
    };
    get phoneNuberExtensionButton () {
        return $('[id="Phone_Number_Extension__c"]');
    };
    get phoneNuberExtensionChoseButton () {
        return $('option=+1242');
    };
    get submitButton() {
        return $('[type="submit"]');
    };
    get wrongNumberLabel() {
        return $('[id="ValidMsgPhone_Number_Base__c"]');
    };
    get emailAlertLabel() {
        return $('[id="ValidMsgEmail"]');
    };

    async acceptCloseButtonClick (){
        try{
            await this.acceptCloseButton.click();
    }catch{
        console.log('Accept close button is not displayed.');
    }};
    async openTelnyxContactUs() {
        await browser.url('https://telnyx.com/contact-us')
    };
    async questionsBoxScrollTo() {
        await this.questionsBox.scrollIntoView(); 
    };
    async answerInQuestionsBox(firstName, lastName, businessEmail, phoneNumber, companyWebsite) {
        await this.reasonForContactButton.click();
        await this.supportButton.click();
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.businessEmailInput.setValue(businessEmail);
        await this.phoneNuberExtensionButton.click();
        await this.phoneNuberExtensionChoseButton.click();
        await this.phoneNumberInput.setValue(phoneNumber);
        await this.companyWebsiteInput.setValue(companyWebsite);
        await this.submitButton.click();
    };
    async invalidEmailIsDisplayed() {
        await this.emailAlertLabel.isDisplayedInViewport();
        
    };
    async wrongNumberLabeisDisplayed() {
        await this.wrongNumberLabel.isDisplayedInViewport();
    };
}
export default new ContactUsPage();
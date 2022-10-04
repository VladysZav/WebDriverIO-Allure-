import MainPage from '../pageobjects/mainPage'

describe('Tests on main page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await MainPage.openTelnyx();
        await MainPage.acceptCloseButtonClick();
    });
    beforeEach(async () => {
        await MainPage.openTelnyx();
    });
    it('Testing the "About us" button in footer', async () => {
        await MainPage.aboutUsButtonScrollTo();
        await browser.pause(1000);
        await MainPage.aboutUsButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/company/about');
    });
    it('Testing the "Website Terms and Conditions" button in footer', async () => {
        await MainPage.websiteTermsAndConditionsButtonScrollTo();
        await browser.pause(1000);
        await MainPage.websiteTermsAndConditionsButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/terms-and-conditions');
    });
});
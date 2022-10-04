import SipTrunksPage from '../pageobjects/sipTrunksPage';

describe('Tests on sipTrunks page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await SipTrunksPage.openTelnyxSipTrunks();
        await SipTrunksPage.acceptCloseButtonClick();
    });
    beforeEach(async () => {
        await SipTrunksPage.openTelnyxSipTrunks();
    });
    it('Testing the "UCaaS" button', async () => {
        await SipTrunksPage.ucaasButtonScrollTo();
        await browser.pause(1000);
        await SipTrunksPage.ucaasButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/ucaas');
    });
    it('Testing the "Managed Services" button', async () => {
        await SipTrunksPage.managedServicesButtonScrollTo();
        await browser.pause(1000);
        await SipTrunksPage.managedServicesButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/managed-services-telephony-reseller');
    });
    it('Testing the "Small Business" button', async () => {
        await SipTrunksPage.smallBusinessButoonScrollTo();
        await browser.pause(1000);
        await SipTrunksPage.smallBusinessButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/voip-for-small-business');
    });
    it('Testing the "Multi-Cloud" button', async () => {
        await SipTrunksPage.multiCloudsButtonScrollTo();
        await browser.pause(1000);
        await SipTrunksPage.multiCloudsButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/multi-cloud');
    });
});
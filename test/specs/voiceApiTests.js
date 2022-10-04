import VoiceApiPage from '../pageobjects/voiceApiPage'

describe('Tests on Voice API page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await VoiceApiPage.openTelnyxVoiceApi();
        await VoiceApiPage.acceptCloseButtonClick();
    });
    beforeEach(async () => {
        await VoiceApiPage.openTelnyxVoiceApi();
    });
    it('Testing the "Cloud IVR" button', async () => {
        await VoiceApiPage.cloudIVRButtonScrollTo();
        await browser.pause(1000);
        await VoiceApiPage.cloudIVRButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/cloud-ivr');
    });
    it('Testing the "Contact center" button', async () => {
        await VoiceApiPage.contactCenterButtonScrollTo();
        await browser.pause(1000);
        await VoiceApiPage.contactCenterButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/contact-center');
    });
    it('Testing the "Call Tracking" button', async () => {
        await VoiceApiPage.callTrackingButtonScrollTo();
        await browser.pause(1000);
        await VoiceApiPage.callTrackingButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/call-tracking');
    });
    it('Testing the "AI & Voice Analytics" button', async () => {
        await VoiceApiPage.aiAndVoiceAnalyticsButtonScrollTo();
        await browser.pause(1000);
        await VoiceApiPage.aiAndVoiceAnalyticsButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/conversational-ai');
    });
});
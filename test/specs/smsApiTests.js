import SmsApiPage from '../pageobjects/smsApiPage'

describe('Tests on SMS API page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await SmsApiPage.openTelnyxVSmsApi();
        await SmsApiPage.acceptCloseButtonClick();
    });
    beforeEach(async () => {
        await SmsApiPage.openTelnyxVSmsApi();
    });
    it('Testing the "Twexit API" button', async () => {
        await SmsApiPage.twexitApiButtonScrollTo();
        await browser.pause(1000);
        await SmsApiPage.twexitApiButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/twexit-api');
    });
    it('Testing the "Verify API" button', async () => {
        await SmsApiPage.verifyApiButtonScrollTo();
        await browser.pause(1000);
        await SmsApiPage.verifyApiButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/products/verify-api');
    });
    it('Testing the "SMS notifications" button', async () => {
        await SmsApiPage.smsNotificationsButtonScrollTo();
        await browser.pause(1000);
        await SmsApiPage.smsNotificationsButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/customer-notifications-system');
    });
    it('Testing the "Text appointment reminders" button', async () => {
        await SmsApiPage.textAppointmentRemindersButtonScrollTo();
        await browser.pause(1000);
        await SmsApiPage.textAppointmentReminderButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/automated-appointment-reminders');
    });
    it('Testing the "Two Factor Authentication" button', async () => {
        await SmsApiPage.twoFactorAuthenticationButtonScrollTo();
        await browser.pause(1000);
        await SmsApiPage.twoFactorAuthenticationButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/two-factor-authentication');
    });
    it('Testing the "SMS Marketing" button', async () => {
        await SmsApiPage.smsMarketingButtonScrollTo();
        await browser.pause(1000);
        await SmsApiPage.smsMarketingButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/sms-marketing');
    });
});
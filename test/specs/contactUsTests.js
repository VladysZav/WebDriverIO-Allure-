import ContactUsPage from '../pageobjects/contactUsPage'

describe('Tests on Contact us page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await ContactUsPage.openTelnyxContactUs();
        await ContactUsPage.acceptCloseButtonClick();
    });

    beforeEach(async () => {
        await ContactUsPage.openTelnyxContactUs();
    });
    it('Testing with valid data of the "Talk to an expert" form', async () => {
        await ContactUsPage.questionsBoxScrollTo();
        await ContactUsPage.answerInQuestionsBox('Jon', 'Smith', 'example@ex.com', '2224441616', 'http://www.example2.com/' );
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('thank-you');
    });
    it('Testing with invalid email of the "Talk to an expert" form', async () => {
        await ContactUsPage.questionsBoxScrollTo();
        await ContactUsPage.answerInQuestionsBox('Jon', 'Smith', 'example1ex.com', '2224441616', 'http://www.example2.com/' );
        await browser.pause(1000);
        await ContactUsPage.invalidEmailIsDisplayed();
    });
    it('Testing with invalid number phone of the "Talk to an expert" form', async () => {
        await ContactUsPage.questionsBoxScrollTo();
        await ContactUsPage.answerInQuestionsBox('Jon', 'Smith', 'example@ex.com', '4', 'http://www.example2.com/' );
        await browser.pause(1000);
        await ContactUsPage.wrongNumberLabeisDisplayed();
    });
});
import ElasticSipPage from '../pageobjects/elasticSipPage'

describe('Tests on elasticSip page', () => {
    before(async () => {
        await browser.maximizeWindow();
        await ElasticSipPage.openTelnyxElasticSip();
        await ElasticSipPage.acceptCloseButtonClick();
    });
    it('Testing the the "Make and receive calls in" selection menu', async () => {
        await ElasticSipPage.listBoxScrollTo();
        await ElasticSipPage.listBoxClick();
        await ElasticSipPage.unitedKingdomButtonClick();
        await expect(browser).toHaveUrl('https://telnyx.com/pricing/elastic-sip/gb');
    });
});